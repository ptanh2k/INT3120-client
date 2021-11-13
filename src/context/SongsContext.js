import React, {useState, useEffect, createContext} from 'react';

import {getAllSongs} from '../services/song';

export const SongsContext = createContext();

const SongsProvider = props => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs().then(response => setSongs(response));
  }, []);

  return (
    <SongsContext.Provider value={[songs, setSongs]}>
      {props.children}
    </SongsContext.Provider>
  );
};

export default SongsProvider;
