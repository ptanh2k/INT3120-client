import React from 'react';
import {View, StyleSheet} from 'react-native';
import Repeat from './Repeat';
import Shuffle from './Shuffle';

const Options = () => {
  return (
    <View style={styles.container}>
      <View style={styles.repeatBtn}>
        <Repeat />
      </View>
      <View style={styles.shuffleBtn}>
        <Shuffle />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
  },
  repeatBtn: {
    marginRight: 30,
  },
  shuffleBtn: {
    marginLeft: 30,
  },
});

export default Options;
