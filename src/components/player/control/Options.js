import React from 'react';
import {View, StyleSheet} from 'react-native';
import Repeat from './Repeat';
import Shuffle from './Shuffle';

const Options = () => {
  return (
    <View style={styles.container}>
      <Repeat />
      <Shuffle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Options;
