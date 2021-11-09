import React from 'react';

import Container from '../components/Container';
import Songs from '../components/song/Songs';
import SongsProvider from '../context/SongsContext';

const Home = ({navigation}) => {
  return (
    <Container>
      <SongsProvider>
        <Songs navigation={navigation} />
      </SongsProvider>
    </Container>
  );
};

export default Home;
