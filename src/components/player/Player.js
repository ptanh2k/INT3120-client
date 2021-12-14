import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Animated,
  StyleSheet,
} from 'react-native';

import TrackPlayer, {Event, Capability} from 'react-native-track-player';

import ProgressBar from './ProgressBar';
import Container from '../Container';
import Options from './control/Options';
import TextStyles from '../../constants/styles/TextStyles';
import ControlButton from './control/ControlButton';

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

const Player = ({onNext, onPrevious, onTogglePlayback, route}) => {
  const {songs, song} = route.params;

  const scrollX = useRef(new Animated.Value(0)).current;

  const slider = useRef(null); // to not re-initialize it
  const index = useRef(0);

  const [songIndex, setSongIndex] = useState(0);

  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const getSongIndex = (ss, s) => {
    return ss.indexOf(s);
  };

  const sIndex = getSongIndex(songs, song);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      const indx = Math.round(value / width);
      setSongIndex(indx);
    });

    TrackPlayer.setupPlayer().then(async () => {
      console.log('Player ready');

      await TrackPlayer.reset();
      await TrackPlayer.add(songs);
      TrackPlayer.skip(sIndex);
      // isPlayerReady.current = true;
      setIsPlayerReady(true);
      TrackPlayer.play();

      await TrackPlayer.updateOptions(TRACK_PLAYER_CONTROL_OPTS);

      TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async event => {
        console.log(event);

        const trackId = (await TrackPlayer.getCurrentTrack()) - 1;

        console.log('track id', trackId, 'index', index.current);

        // if (trackId !== index.current) {
        //   setSongIndex(trackId);

        //   if (trackId > index.current) {
        //     goNext();
        //   } else {
        //     goPrev();
        //   }
        // }
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
    if (isPlayerReady) {
      TrackPlayer.skip(sIndex)
        .then(_ => {
          console.log('Change track');
        })
        .catch(e => console.log('Error when change track', e));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sIndex]);

  const goPrev = async () => {
    console.log('Slider index: ', songIndex);
    slider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
    TrackPlayer.skipToPrevious();
  };

  const goNext = async () => {
    console.log('Slider index: ', songIndex);
    slider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
    TrackPlayer.skipToNext();
  };

  // eslint-disable-next-line no-shadow
  const renderItem = ({index, item}) => {
    return (
      <View>
        <Image source={{uri: item.artwork}} style={styles.artwork} />
      </View>
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
          initialScrollIndex={sIndex}
          renderItem={renderItem}
          // eslint-disable-next-line no-shadow
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
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
    width: width,
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
