import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet} from 'react-native';

import Song from './Song';
import songService from '../../services/songService';
const TopSongs = ({navigation, user}) => {
  const [song, setSong] = useState([]);

  useEffect(() => {
    songService.getAllSongs().then(response => {
      setSong(response);
    });
  }, []);

  song.sort((firstItem, secondItem) => secondItem.views - firstItem.views);
  const five_song = song.slice(0, 15);

  return (
    <>
      <Animated.FlatList
        style={styles.topSong}
        data={five_song}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Song
            TopSongs={five_song}
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
