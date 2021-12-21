import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

import Container from '../components/Container';
import Song from '../components/song/Song';

import songService from '../services/songService';

const SongInList = ({route, navigation}) => {
  const [songOfList, setSongOfList] = useState([]);
  const {id, user} = route.params;

  useEffect(() => {
    songService.getSongInList(id).then(songs => {
      let artist = '';
      let song_genre = '';

      const list_songs = songs.map(song => {
        artist = song.artists.map(a => a.name).join(', ');
        song_genre = song.genres.map(g => g.title).join(', ');
        return {...song, artist, song_genre};
      });
      setSongOfList(list_songs);
    });
  }, [id]);

  return (
    <Container>
      <Animated.FlatList
        data={songOfList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Song
            songs={songOfList}
            song={item}
            navigation={navigation}
            user={user}
          />
        )}
      />
    </Container>
  );
};

export default SongInList;
