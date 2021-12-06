import React, {useState, useEffect} from 'react';

import Container from '../components/Container';
import {Card} from 'react-native-elements';
import {FlatList, Text, Image, View, StyleSheet} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {getAllGenres} from '../services/genreService';
import TopSong from '../components/song/TopSong';

const Home = ({route, navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllGenres().then(response => {
      setData(response);
    });
    // console.log(data);
  }, []);

  return (
    <Container>
      {/* <SongsProvider>
        <Songs navigation={navigation} />
      </SongsProvider> */}
      <View>
        <Text style={styles.content}>AlBum</Text>
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
                        navigation.navigate('PlayListStack');
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

      <Text style={styles.content}>TOP VIEWED</Text>

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
    fontSize: 40,
    color: 'white',
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
