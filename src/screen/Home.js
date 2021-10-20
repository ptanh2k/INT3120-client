import React from 'react';
import {View, StyleSheet} from 'react-native';

import Songs from '../components/song/Songs';
import SongsProvider from '../context/SongsContext';

const Home = () => {
  return (
    <View style={styles.container}>
      <SongsProvider>
        <Songs />
      </SongsProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
