import React, {useState} from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import {setShuffleMode} from 'react-native-track-player';

import Entypo from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('window');

const Shuffle = () => {
  const [active, isActive] = useState(false);

  const pressShuffle = () => {
    setShuffleMode(!active);
    isActive(!active);
  };

  return (
    <Animated.View style={styles.repeatBtn}>
      <TouchableRipple onPress={pressShuffle}>
        <Entypo
          name="shuffle"
          size={height / 25}
          color={active ? 'black' : 'gray'}
        />
      </TouchableRipple>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  repeatBtn: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Shuffle;
