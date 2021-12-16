import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

import Container from '../components/Container';
import Song from '../components/song/Song';

import genreService from '../services/genreService';

const Genre = ({route, navigation}) => {
  const [songsOfGenre, setSongsOfGenre] = useState([]);
  const {genre} = route.params;

  useEffect(() => {
    genreService.getAllSongsOfGenre(genre).then(response => {
      let artist = '';
      let song_genre = '';

      const list_songs = response.map(song => {
        artist = song.artists.map(a => a.name).join(', ');
        song_genre = song.genres.map(g => g.title).join(', ');
        return {...song, artist, song_genre};
      });

      setSongsOfGenre(list_songs);
    });
  }, [genre]);

  return (
    <Container>
      <Animated.FlatList
        data={songsOfGenre}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Song
            songs={songsOfGenre}
            song={item}
            navigation={navigation}
            user={route.params.username}
          />
        )}
      />
    </Container>
  );
};

export default Genre;
