import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Dimensions, Animated, StyleSheet} from 'react-native';

import TrackPlayer, {Event, Capability} from 'react-native-track-player';

import ProgressBar from './ProgressBar';
import Container from '../Container';
import Options from './control/Options';
import TextStyles from '../../constants/styles/TextStyles';
import ControlButton from './control/ControlButton';

const {width, height} = Dimensions.get('window');

const TRACK_PLAYER_CONTROL_OPTS = {
  stopWithApp: false, //Whether the player will be destroyed when the app closes
  // alwaysPauseOnInterruption: true, //Whether the remote-duck event will be triggered on every interruption
  waitForBuffer: true,
  capabilities: [
    Capability.Play,
    Capability.Pause,
    Capability.SkipToNext,
    Capability.SkipToPrevious,
    Capability.SeekTo,
  ],
  compactCapabilities: [
    Capability.Play,
    Capability.Pause,
    Capability.SkipToNext,
    Capability.SkipToPrevious,
  ],
};

const Player = ({onNext, onPrevious, onTogglePlayback, route}) => {
  const {songs} = route.params;

  const scrollX = useRef(new Animated.Value(0)).current;

  const slider = useRef(null); // to not re-initialize it
  const index = useRef(0);

  const [songIndex, setSongIndex] = useState(0);

  const isPlayerReady = useRef(false);
  const isFromUser = useRef(true);

  const position = useRef(Animated.divide(scrollX, width)).current;

  useEffect(() => {
    scrollX.addListener(({value}) => {
      // console.log(value);
      //Get song index
      const indx = Math.round(value / width);
      setSongIndex(indx);
      // console.log(indx);
    });

    TrackPlayer.setupPlayer().then(async () => {
      console.log('Player ready');

      await TrackPlayer.reset();
      await TrackPlayer.add(songs);
      TrackPlayer.play();
      isPlayerReady.current = true;

      await TrackPlayer.updateOptions(TRACK_PLAYER_CONTROL_OPTS);

      TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async event => {
        console.log(event);

        const trackId = (await TrackPlayer.getCurrentTrack()) - 1;

        // console.log('track id', trackId, 'index', index.current);

        if (trackId !== index.current) {
          setSongIndex(trackId);
          isFromUser.current = false;

          if (trackId > index.current) {
            goNext();
          } else {
            goPrev();
          }
        }

        setTimeout(() => {
          isFromUser.current = true;
        }, 200);
      });

      TrackPlayer.addEventListener(Event.RemoteDuck, event => {
        if (event.paused) {
          TrackPlayer.pause();
        } else {
          TrackPlayer.play();
        }
      });
    });

    return () => {
      scrollX.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isPlayerReady.current && isFromUser.current) {
      TrackPlayer.skip(songs[songIndex].id)
        .then(_ => {
          console.log('Change track');
        })
        .catch(e => console.log('Error when change track', e));
    }
    index.current = songIndex;
  }, [songIndex, songs]);

  const goPrev = async () => {
    slider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  const goNext = async () => {
    slider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };

  // eslint-disable-next-line no-shadow
  const renderItem = ({index, item}) => {
    return (
      <Animated.View
        style={[
          {
            width: width,
            transform: [
              {
                translateX: Animated.multiply(
                  Animated.add(position, -index),
                  -100,
                ),
              },
            ],
          },
          styles.itemView,
        ]}>
        <Animated.Image source={{uri: item.artwork}} style={styles.artwork} />
      </Animated.View>
    );
  };

  return (
    <Container style={styles.container}>
      <View style={styles.songList}>
        <Animated.FlatList
          ref={slider}
          horizontal
          paddingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16} //Smoother animation
          data={songs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
        />
      </View>
      <View>
        <Text style={[TextStyles.songTitle, styles.title]} numberOfLines={1}>
          {songs[songIndex].title}
        </Text>
        <Text style={[TextStyles.artist, styles.artist]}>
          {songs[songIndex].artist}
        </Text>
      </View>

      <ProgressBar />

      <View style={styles.controlBtn}>
        <ControlButton onNext={goNext} onPrev={goPrev} />
      </View>

      <View style={styles.options}>
        <Options />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    maxHeight: 600,
  },
  itemView: {
    alignItems: 'center',
  },
  artwork: {
    width: 320,
    height: 320,
    borderRadius: 5,
  },
  songList: {
    height: 320,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    textTransform: 'capitalize',
    paddingTop: height / 60,
  },
  artist: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'capitalize',
    paddingBottom: height / 60,
  },
  controlBtn: {
    alignItems: 'center',
  },
  options: {
    alignItems: 'center',
  },
});

export default Player;
