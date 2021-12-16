import React, {useState, useEffect} from 'react';
import {Text, Animated, Dimensions, StyleSheet} from 'react-native';

import Container from '../components/Container';
import Song from '../components/song/Song';

import songService from '../services/songService';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Playlist = ({route, navigation, currList}) => {
  const [displayed, setDisplayed] = useState([]);

  return (
    <Container style={styles.container}>
      {displayed.length === 0 ? (
        <Text style={styles.emptyText}>No playlist added</Text>
      ) : (
        <Animated.FlatList
          data={displayed}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Song
              songs={displayed}
              song={item}
              navigation={navigation}
              user={route.params.username}
            />
          )}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  emptyText: {
    fontWeight: 'bold',
    color: '#9494b8',
    fontSize: screenWidth / 20,
    alignSelf: 'center',
    marginTop: screenHeight / 3,
  },
});

export default Playlist;
