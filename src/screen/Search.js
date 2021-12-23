import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';

import Container from '../components/Container';
import {FlatList} from 'react-native-gesture-handler';
import songService from '../services/songService';

import Song from '../components/song/Song';

const screenWidth = Dimensions.get('window').width;

const Search = ({route, navigation}) => {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');

  const {username} = route.params;

  useEffect(() => {
    fetchPost();
    return () => {};
  }, []);

  const fetchPost = () => {
    songService.getAllSongs().then(responseJson => {
      setFilterData(responseJson);
      setMasterData(responseJson);
    });
  };

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <View style={styles.down}>
          <View style={styles.box}>
            <TextInput
              style={styles.textInput}
              value={search}
              placeholder="Search here..."
              underlineColorAndroid="transparent"
              onChangeText={text => searchFilter(text)}
            />
            <AntDesign name="search1" size={20} style={styles.iconSearch} />
          </View>
        </View>
        <View>
          <FlatList
            data={filterData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Song
                songs={filterData}
                song={item}
                navigation={navigation}
                user={username}
              />
            )}
          />
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  up: {
    flexDirection: 'row',
  },
  down: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#6d6e6f',
    marginLeft: 45,
  },
  itemSeparatorView: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#c8c8c8',
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
  },
  iconSearch: {
    position: 'absolute',
    left: 4,
    marginTop: 7,
    color: 'white',
  },
  box: {
    flex: 1,
    width: '50%',
    height: 45,
    backgroundColor: '#6d6e6f',
    marginTop: 10,
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  backBtn: {
    color: 'white',
    marginTop: 17,
    marginLeft: screenWidth / 30,
  },

  itemStyle: {
    padding: 15,
    marginLeft: 10,
    color: 'white',
  },
});

export default Search;
