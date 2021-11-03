import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

const Song = ({song, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.song}
        onPress={() => {
          navigation.navigate('Play');
        }}>
        <Image style={styles.artworkImage} source={{uri: song.artwork}} />
        <View style={styles.divide}>
          <Text style={styles.songTitle}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <Pressable style={styles.songInteraction}>
          <Icon name="dots-three-vertical" size={15} />
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
  },
  song: {
    flexDirection: 'row',
  },
  divide: {
    justifyContent: 'flex-start',
    marginLeft: 5,
  },
  artworkImage: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    justifyContent: 'flex-start',
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 10,
  },
  songInteraction: {
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 10,
  },
});

export default Song;
