import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

import Container from '../components/Container';
import Song from '../components/song/Song';

import songService from '../services/songService';

const Favorite = ({route, navigation}) => {
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    songService.getFavorite(route.params.username).then(response => {
      let artist = '';
      let genre = '';

      const list_songs = response.map(song => {
        artist = song.artists.map(a => a.name).join(', ');
        genre = song.genres.map(g => g.title).join(', ');
        return {...song, artist, genre};
      });

      setFavoriteSongs(list_songs);
    });
  }, [route.params.username]);

  return (
    <Container>
      <Animated.FlatList
        data={favoriteSongs}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Song
            songs={favoriteSongs}
            song={item}
            navigation={navigation}
            user={route.params.username}
          />
        )}
      />
    </Container>
  );
};

export default Favorite;
