import React from 'react';

import Container from '../components/Container';
import Songs from '../components/song/Songs';
import SongsProvider from '../context/SongsContext';

const Home = ({route, navigation}) => {
  return (
    <Container>
      <SongsProvider>
        <Songs navigation={navigation} user={route.params.username} />
      </SongsProvider>
    </Container>
  );
};

export default Home;
