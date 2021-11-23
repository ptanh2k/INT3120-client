import React, {useContext} from 'react';
import {Animated} from 'react-native';

import Song from './Song';
import {SongsContext} from '../../context/SongsContext';

const Songs = ({navigation}) => {
  const [songs] = useContext(SongsContext);

  return (
    <>
      <Animated.FlatList
        data={songs}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Song songs={songs} song={item} navigation={navigation} />
        )}
      />
    </>
  );
};

export default Songs;
