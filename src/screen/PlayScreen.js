import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

import Player from '../components/player/Player';

const PlayScreen = () => {
  const playbackState = usePlaybackState();

  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      return;
    }

    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
  };

  const togglePlayback = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: 1,
        title: 'Pure (Demo)',
        artist: 'David Chavez',
        artwork: 'https://i.picsum.photos/id/500/200/200.jpg',
        duration: 28,
      });
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text>Play screen</Text>
      <Player
        style={styles.player}
        onNext={skipToNext}
        onTogglePlayback={togglePlayback}
        onPrevious={skipToPrevious}
      />
      <Text style={styles.state}>{getStateName(playbackState)}</Text>
    </View>
  );
};

PlayScreen.navigationOptions = {
  title: 'Playing',
};

const skipToNext = async () => {
  try {
    await TrackPlayer.skipToNext();
  } catch (err) {
    console.error('Something wrong with the next');
  }
};

const skipToPrevious = async () => {
  try {
    await TrackPlayer.skipToPrevious();
  } catch (err) {
    console.error('Something wrong with the previous');
  }
};

const getStateName = state => {
  switch (state) {
    case TrackPlayer.STATE_PLAYING:
      return 'Playing';
    case TrackPlayer.STATE_PAUSED:
      return 'Paused';
    case TrackPlayer.STATE_STOPPED:
      return 'Stopped';
    case TrackPlayer.STATE_BUFFERING:
      return 'Buffering';
    default:
      return 'None';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  player: {
    marginTop: 40,
  },
  state: {
    marginTop: 20,
  },
});

export default PlayScreen;
