import React, {useEffect, useState} from 'react';

import {View, ActivityIndicator, Dimensions, StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import Icon from 'react-native-vector-icons/AntDesign';

import TrackPlayer from 'react-native-track-player';
import {usePlaybackState} from 'react-native-track-player/lib/hooks';

const screenHeight = Dimensions.get('window').height;

const ControlButton = ({onNext, onPrev}) => {
  const playbackState = usePlaybackState();
  const [isPlaying, setIsPlaying] = useState('paused');

  useEffect(() => {
    // console.log('Player state: ', playbackState);

    if (playbackState === 'playing' || playbackState === 3) {
      setIsPlaying('playing');
    } else if (playbackState === 'paused' || playbackState === 2) {
      setIsPlaying('paused');
    } else {
      setIsPlaying('loading');
    }
  }, [playbackState]);

  const playBtnIndicator = () => {
    switch (isPlaying) {
      case 'playing':
        return <Icon name="pause" size={screenHeight / 25} color="black" />;
      case 'paused':
        return (
          <Icon name="caretright" size={screenHeight / 25} color="black" />
        );
      default:
        return <ActivityIndicator size={screenHeight / 25} color="gray" />;
    }
  };

  const togglePlayPause = () => {
    if (playbackState === 'playing' || playbackState === 3) {
      TrackPlayer.pause();
    } else if (playbackState === 'paused' || playbackState === 2) {
      TrackPlayer.play();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableRipple style={styles.prevBtn} onPress={onPrev}>
        <Icon name="stepbackward" size={screenHeight / 25} color="black" />
      </TouchableRipple>
      <TouchableRipple onPress={togglePlayPause}>
        {playBtnIndicator()}
      </TouchableRipple>
      <TouchableRipple style={styles.nextBtn} onPress={onNext}>
        <Icon name="stepforward" size={screenHeight / 25} color="black" />
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    margin: 6,
  },
  prevBtn: {
    marginRight: 40,
  },
  nextBtn: {
    marginLeft: 40,
  },
});

export default ControlButton;
