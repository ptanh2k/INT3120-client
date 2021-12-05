import React, {useState, useEffect} from 'react';

import Container from '../components/Container';
import {Card} from 'react-native-elements';
import {FlatList, Text, Image, View, StyleSheet} from 'react-native';
import axios from 'axios';
import {baseUrl} from '../constants/url/url';
import SongsProvider from '../context/SongsContext';
import Songs from '../components/song/Songs';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const data = [
    {
      id: 3,
      title: 'Electronic',
      artwork:
        'https://res.cloudinary.com/dwc4kzyds/image/upload/v1638605626/Data/Genre/electronic_qg888x.jpg',
    },
    {
      id: 5,
      title: 'Hip Hop',
      artwork:
        'https://res.cloudinary.com/dwc4kzyds/image/upload/v1638605562/Data/Genre/hip-hop_xwhuac.png',
    },
    {
      id: 2,
      title: 'R&B',
      artwork:
        'https://res.cloudinary.com/dwc4kzyds/image/upload/v1638605480/Data/Genre/rb_dwotrc.png',
    },
    {
      id: 1,
      title: 'Ballad',
      artwork:
        'https://res.cloudinary.com/dwc4kzyds/image/upload/v1638605438/Data/Genre/ballad_b9nmjd.png',
    },
    {
      id: 7,
      title: 'Rock',
      artwork:
        'https://res.cloudinary.com/dwc4kzyds/image/upload/v1638605348/Data/Genre/rock_kovjho.png',
    },
    {
      id: 6,
      title: 'Folk',
      artwork:
        'https://res.cloudinary.com/dwc4kzyds/image/upload/v1638605177/Data/Genre/folk_y6ndub.jpg',
    },
    {
      id: 4,
      title: 'Pop',
      artwork:
        'https://res.cloudinary.com/dwc4kzyds/image/upload/v1638605131/Data/Genre/pop-music_kzt52f.jpg',
    },
  ];
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
            );
          }}
          keyExtractor={(item, index) => index}
        />
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
