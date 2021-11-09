import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const Container = ({children}) => {
  return (
    <LinearGradient
      colors={['#111E50', '#183862', '#2152A3', '#674EB1']}
      style={styles.gradient}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    // marginHorizontal: 15,
  },
});

export default Container;
