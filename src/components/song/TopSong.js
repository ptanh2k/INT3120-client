import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet} from 'react-native';

import Song from './Song';
import songService from '../../services/songService';
const TopSongs = ({navigation, user}) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    songService.getAllSongs().then(response => {
      let artist = '';
      let genre = '';

      const list_songs = response.map(song => {
        artist = song.artists.map(a => a.name).join(', ');
        genre = song.genres.map(g => g.title).join(', ');
        return {...song, artist, genre};
      });

      setSongs(list_songs);
    });
  }, []);

  songs.sort((firstItem, secondItem) => secondItem.views - firstItem.views);
  const five_songs = songs.slice(0, 15);

  return (
    <>
      <Animated.FlatList
        style={styles.topSong}
        data={five_songs}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Song
            songs={five_songs}
            song={item}
            navigation={navigation}
            user={user}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  topSong: {
    marginLeft: 10,
  },
});

export default TopSongs;
