import React, {useEffect, useState} from 'react';

import {
  View,
  Animated,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {TouchableRipple, Modal, Portal} from 'react-native-paper';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import TrackPlayer from 'react-native-track-player';
import {usePlaybackState} from 'react-native-track-player/lib/hooks';

import Song from '../../song/Song';

const screenHeight = Dimensions.get('window').height;

const ControlButton = ({
  onNext,
  onPrev,
  onRepeat,
  onShuffle,
  isTrackRepeatActive,
  navigation,
  user,
}) => {
  const playbackState = usePlaybackState();
  const [isPlaying, setIsPlaying] = useState('paused');
  const [showQueue, setShowQueue] = useState(false);
  const [currentQueue, setCurrentQueue] = useState([]);

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

  const showPlayingQueue = async () => {
    const currQueue = await TrackPlayer.getQueue();
    setCurrentQueue(currQueue);
    setShowQueue(true);
  };

  const closePlayingQueue = () => {
    setShowQueue(false);
  };

  return (
    <View style={styles.container}>
      <>
        <Portal>
          <Modal
            visible={showQueue}
            onDismiss={closePlayingQueue}
            contentContainerStyle={styles.queueModal}>
            <Animated.FlatList
              data={currentQueue}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Song
                  songs={currentQueue}
                  song={item}
                  navigation={navigation}
                  user={user}
                />
              )}
            />
          </Modal>
        </Portal>
      </>
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
        <TouchableRipple style={styles.queueBtn} onPress={showPlayingQueue}>
          <Entypo name="list" size={screenHeight / 25} color="black" />
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
  queueBtn: {
    marginLeft: 55,
  },
  queueModal: {
    backgroundColor: '#000',
  },
});

export default ControlButton;
