import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Menu, Divider} from 'react-native-paper';

import Entypo from 'react-native-vector-icons/Entypo';

const Playlist = ({playlists, playlist, user, navigation}) => {
  const [visible, isVisible] = useState(false);

  const openMenu = () => isVisible(true);

  const closeMenu = () => isVisible(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.playlist}
        onPress={() => console.log('Song screen')}>
        <Image style={styles.artworkImage} source={{uri: playlist.artwork}} />
        <View style={styles.titleArea}>
          <Text style={styles.title}>{playlist.title}</Text>
        </View>
        <View style={styles.playlistInteraction}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Pressable onPress={openMenu}>
                <Entypo name="dots-three-vertical" size={15} color="#fff" />
              </Pressable>
            }>
            <Menu.Item title="Edit playlist" />
            <Divider />
            <Menu.Item title="Delete playlist" />
          </Menu>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    justifyContent: 'center',
  },
  playlist: {
    flexDirection: 'row',
  },
  artworkImage: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    justifyContent: 'flex-start',
  },
  titleArea: {
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  playlistInteraction: {
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 10,
  },
});

export default Playlist;
