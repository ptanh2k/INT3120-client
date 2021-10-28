import React from 'react';

import {Text, StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const ControlButton = () => {
  return (
    <TouchableRipple
      style={styles.controlButtonContainer}
      rippleColor="rgba(0, 0, 0, .32)">
      <Text>Press</Text>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  controlButtonContainer: {
    flex: 1,
  },
});

export default ControlButton;
