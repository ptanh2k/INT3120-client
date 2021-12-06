import React, {useContext, useEffect, useState} from 'react';
import {Animated} from 'react-native';

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
  console.log(five_song.length);

  return (
    <>
      <Animated.FlatList
        style={{marginLeft: 10}}
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

export default TopSongs;
