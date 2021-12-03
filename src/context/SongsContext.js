import React, {useState, useEffect, createContext} from 'react';

import songService from '../services/songService';

export const SongsContext = createContext();

const SongsProvider = props => {
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

  return (
    <SongsContext.Provider value={[songs, setSongs]}>
      {props.children}
    </SongsContext.Provider>
  );
};

export default SongsProvider;
