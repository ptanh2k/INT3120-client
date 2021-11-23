import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

import TrackPlayer, {useProgress} from 'react-native-track-player';

const {width, height} = Dimensions.get('window');

const ProgressBar = props => {
  const {position, duration} = useProgress();

  const formatDuration = secs => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.floor(secs - minutes * 60);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };

  const changeProgress = pos => {
    console.log(pos);
    TrackPlayer.seekTo(pos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Slider
          style={{width: height / 2.35, height: height / 25}}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          minimumTrackTintColor="white"
          thumbTintColor="gray"
          maximumTrackTintColor="cornflowerblue"
          onSlidingComplete={changeProgress}
        />
      </View>
      <View style={styles.duration}>
        <Text style={styles.timeText}>{formatDuration(position)}</Text>
        <Text style={styles.timeText}>{formatDuration(duration)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 10.71,
  },
  progressBar: {
    alignItems: 'center',
  },
  duration: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: height / 40,
  },
  timeText: {
    color: 'white',
    fontSize: height / 62.5,
  },
});

export default ProgressBar;
