import React, {useEffect, useState} from 'react';

import {View, ActivityIndicator, Dimensions, StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import TrackPlayer from 'react-native-track-player';
import {usePlaybackState} from 'react-native-track-player/lib/hooks';

const screenHeight = Dimensions.get('window').height;

const ControlButton = ({
  onNext,
  onPrev,
  onRepeat,
  onShuffle,
  isTrackRepeatActive,
}) => {
  const playbackState = usePlaybackState();
  const [isPlaying, setIsPlaying] = useState('paused');

  useEffect(() => {
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
        return (
          <AntDesign name="pause" size={screenHeight / 20} color="black" />
        );
      case 'paused':
        return (
          <AntDesign name="caretright" size={screenHeight / 20} color="black" />
        );
      default:
        return <ActivityIndicator size={screenHeight / 20} color="gray" />;
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
      <View style={styles.mainController}>
        <TouchableRipple style={styles.prevBtn} onPress={onPrev}>
          <AntDesign
            name="stepbackward"
            size={screenHeight / 25}
            color="black"
          />
        </TouchableRipple>
        <TouchableRipple onPress={togglePlayPause}>
          {playBtnIndicator()}
        </TouchableRipple>
        <TouchableRipple style={styles.nextBtn} onPress={onNext}>
          <AntDesign
            name="stepforward"
            size={screenHeight / 25}
            color="black"
          />
        </TouchableRipple>
      </View>
      <View style={styles.subController}>
        <TouchableRipple style={styles.repeatBtn} onPress={onRepeat}>
          <Entypo
            name="cw"
            size={screenHeight / 35}
            color={isTrackRepeatActive ? 'gray' : 'black'}
          />
        </TouchableRipple>
        <TouchableRipple style={styles.shuffleBtn} onPress={onShuffle}>
          <Entypo name="shuffle" size={screenHeight / 35} color="black" />
        </TouchableRipple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainController: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },
  subController: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  prevBtn: {
    marginRight: 40,
  },
  nextBtn: {
    marginLeft: 40,
  },
  repeatBtn: {
    marginRight: 55,
  },
});

export default ControlButton;
