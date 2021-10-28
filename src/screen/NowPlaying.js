import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const NowPlaying = ({song}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <ImageBackground
          style={styles.imageBackground}
          source={require('../asset/images/Adore_You_-_Harry_Styles.png')}>
          <Pressable>
            <Icon name="arrowdown" size={15} />
          </Pressable>
        </ImageBackground>
        <Text style={styles.title}>Adore You</Text>
        <Text style={styles.artist}>Harry Styles</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {},
  imageBackground: {},
  title: {},
  artist: {},
});

export default NowPlaying;
