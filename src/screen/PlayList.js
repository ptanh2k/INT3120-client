import Container from '../components/Container';
import SongsProvider from '../context/SongsContext';
import Songs from '../components/song/Songs';
import React from 'react';

const PlayList = ({route, navigation}) => {
  return (
    <Container>
      <SongsProvider>
        <Songs navigation={navigation} user={route.params.username} />
      </SongsProvider>
    </Container>
  );
};

export default PlayList;
