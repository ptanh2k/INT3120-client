import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Dimensions, Animated, StyleSheet} from 'react-native';

import TrackPlayer, {Event, Capability} from 'react-native-track-player';

import ProgressBar from './ProgressBar';
import ControlButton from './ControlButton';

import songs from '../../asset/data/data';

const {width, height} = Dimensions.get('window');

const TRACK_PLAYER_CONTROL_OPTS = {
  stopWithApp: false, //Whether the player will be destroyed when the app closes
  alwaysPauseOnInterruption: true, //Whether the remote-duck event will be triggered on every interruption
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

const Player = ({onNext, onPrevious, onTogglePlayback}) => {
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
  }, [songIndex]);

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
        <Animated.Image source={item.artwork} style={styles.artwork} />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
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
        <Text style={styles.title} numberOfLines={1}>
          {songs[songIndex].title}
        </Text>
        <Text style={styles.artist}>{songs[songIndex].artist}</Text>
      </View>

      <ProgressBar />

      <ControlButton onNext={goNext} onPrev={goPrev} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
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
    fontWeight: '600',
    textTransform: 'capitalize',
    color: 'black',
  },
  artist: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    textTransform: 'capitalize',
  },
});

export default Player;
