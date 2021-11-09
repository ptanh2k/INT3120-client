import React, {useState} from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import {setRepeatMode} from 'react-native-track-player';

import Entypo from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('window');

const Repeat = () => {
  const [active, isActive] = useState(false);

  const pressRepeat = () => {
    setRepeatMode(!active);
    isActive(!active);
  };

  return (
    <Animated.View style={styles.repeatBtn}>
      <TouchableRipple onPress={pressRepeat}>
        <Entypo
          name="cw"
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

export default Repeat;
