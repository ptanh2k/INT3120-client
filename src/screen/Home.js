import React, {useState, useEffect} from 'react';

import Container from '../components/Container';
import {Card} from 'react-native-elements';
import {FlatList, Text, Image, View, StyleSheet} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import genreService from '../services/genreService';
import TopSong from '../components/song/TopSong';

const Home = ({route, navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    genreService.getAllGenres().then(response => {
      setData(response);
    });
  }, []);

  return (
    <Container>
      <View>
        <Text style={styles.content}>AlBUM</Text>
        <FlatList
          horizontal
          data={data}
          renderItem={({item: rowData}) => {
            return (
              <View>
                <Card title={null} containerStyle={styles.cardStyle}>
                  <View>
                    <TouchableOpacity
                      style={styles.cardStyle}
                      onPress={() => {
                        navigation.navigate('GenreStack', {
                          genre: rowData.title,
                        });
                      }}>
                      <Image
                        source={{uri: rowData.artwork}}
                        style={styles.imageStyle}
                      />
                      <View>
                        <Text style={styles.albumName}>{rowData.title}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Card>
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>

      <Text style={styles.content}>TOP SONGS FOR STREAMING</Text>

      <View>
        <TopSong navigation={navigation} user={route.params.username} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 240,
    height: 150,
  },

  content: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
  },

  cardStyle: {
    padding: 0,
    width: 250,
    height: 210,
    backgroundColor: 'black',
  },

  albumName: {
    marginBottom: 5,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Home;
