import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TrackPlayer, {
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

const Player = () => {
  const playBackState = usePlaybackState();
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState('');
  const [artist, setArtist] = useState('');

  return (
    <View style={styles.container}>
      <Text>Player</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Player;
