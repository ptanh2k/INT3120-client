import React, {useState, useEffect} from 'react';
import {Text, Animated, Dimensions, StyleSheet} from 'react-native';

import Container from '../components/Container';
import Playlist from '../components/playlist/Playlist';

import songService from '../services/songService';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const PlaylistScreen = ({route, navigation}) => {
  const [playlists, setPlaylists] = useState([]);
  const {username} = route.params;

  useEffect(() => {
    songService.getUserPlaylist(username).then(response => {
      setPlaylists(response);
    });
  }, [username]);

  return (
    <Container style={styles.container}>
      {playlists.length === 0 ? (
        <Text style={styles.emptyText}>No playlist added</Text>
      ) : (
        <Animated.FlatList
          data={playlists}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Playlist
              playlists={playlists}
              playlist={item}
              navigation={navigation}
              user={route.params.username}
            />
          )}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  emptyText: {
    fontWeight: 'bold',
    color: '#9494b8',
    fontSize: screenWidth / 20,
    alignSelf: 'center',
    marginTop: screenHeight / 3,
  },
});

export default PlaylistScreen;
