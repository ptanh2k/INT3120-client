import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Menu, Divider} from 'react-native-paper';

import Entypo from 'react-native-vector-icons/Entypo';

import TextStyles from '../../constants/styles/TextStyles';
import songService from '../../services/songService';

const Song = ({songs, song, user, navigation}) => {
  const [visible, isVisible] = useState(false);

  const openMenu = () => isVisible(true);

  const closeMenu = () => isVisible(false);

  const obj = {
    songId: song.id,
    username: user,
  };

  const addToFavorite = () => {
    songService.addToFavorite(obj).then(res => {
      console.log(res);
      closeMenu();
      ToastAndroid.showWithGravity(
        'Song added to favorites',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.song}
        onPress={() => {
          navigation.navigate('Player', {songs, song});
        }}>
        <Image style={styles.artworkImage} source={{uri: song.artwork}} />
        <View style={styles.divide}>
          <Text style={[TextStyles.songTitle, styles.songTitle]}>
            {song.title}
          </Text>
          <Text style={[TextStyles.artist, styles.artist]}>{song.artist}</Text>
        </View>
        <View style={styles.songInteraction}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Pressable onPress={openMenu}>
                <Entypo name="dots-three-vertical" size={15} color="#fff" />
              </Pressable>
            }>
            <Menu.Item
              onPress={() => addToFavorite()}
              title="Add to favorites"
            />
            <Divider />
            <Menu.Item onPress={() => {}} title="Add to playlist" />
          </Menu>
        </View>
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
