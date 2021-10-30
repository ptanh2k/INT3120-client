import React from 'react';
import {View, StyleSheet} from 'react-native';

import {useProgress} from 'react-native-track-player';

const ProgressBar = () => {
  const progress = useProgress();

  return (
    <View style={styles.progress}>
      <View style={[{flex: progress.position}, styles.played]} />
      <View
        style={[{flex: progress.duration - progress.position}, styles.duration]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progress: {
    flexDirection: 'row',
    height: 1,
    width: '90%',
    marginTop: 10,
  },
  played: {
    backgroundColor: 'cornflowerblue',
  },
  duration: {
    backgroundColor: 'gray',
  },
});

export default ProgressBar;
