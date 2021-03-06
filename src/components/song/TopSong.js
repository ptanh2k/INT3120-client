import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet} from 'react-native';

import Song from './Song';
import songService from '../../services/songService';

// import helpers from '../../helpers/helper';

const TopSongs = ({navigation, user}) => {
  const [songs, setSongs] = useState([]);
  // const [top, setTop] = useState([]);

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
  const five_song = songs.slice(0, 15);
  console.log(five_song.length);

  // useEffect(() => {
  //   songService.getAllSongs().then(response => {
  //     let artist = '';
  //     let genre = '';

  //     const list_songs = response.map(song => {
  //       artist = song.artists.map(a => a.name).join(', ');
  //       genre = song.genres.map(g => g.title).join(', ');
  //       return {...song, artist, genre};
  //     });

  //     setSongs(list_songs);
  //     const ten_songs = helpers.getTopSongs(songs);
  //     setTop(ten_songs);
  //   });
  // }, [songs]);

  // const ten_songs = helpers.getTopSongs(songs);
  // console.log(ten_songs);
  // // setTop(ten_songs);

  return (
    <>
      <Animated.FlatList
        style={styles.topSong}
        data={five_song}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Song
            songs={five_song}
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
