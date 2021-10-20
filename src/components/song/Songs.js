import React, {useContext} from 'react';
import {FlatList} from 'react-native';

import Song from './Song';
import {SongsContext} from '../../context/SongsContext';

const Songs = () => {
  const [songs] = useContext(SongsContext);

  return (
    <>
      <FlatList
        data={songs}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Song song={item} />}
      />
    </>
  );
};

export default Songs;
