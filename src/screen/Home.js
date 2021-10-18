import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import HomeHeader from '../components/HomeHeader';

const Home = () => {
  return (
    <View>
      <HomeHeader title="Home" />
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
});

export default Home;
