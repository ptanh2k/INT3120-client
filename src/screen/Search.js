import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import Container from '../components/Container';
import {FlatList} from 'react-native-gesture-handler';
import {getAllSongs} from '../services/song';

const Search = ({navigation}) => {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetchPost();
    return () => {};
  }, []);
  const fetchPost = () => {
    getAllSongs().then(responseJson => {
      setFilterData(responseJson);
      setMasterData(responseJson);
    });
  };

  const ItemView = ({item}) => {
    return (
      <Text style={styles.itemStyle}>
        {item.id}
        {'. '}
        {item.title.toUpperCase()}
      </Text>
    );
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

  const ItemSeparatorView = () => {
    return <View style={styles.itemSeparatorView} />;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <View style={styles.up}>
          <TouchableRipple
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Icon name="arrowleft" size={35} style={styles.titleBack} />
          </TouchableRipple>
          <Text style={styles.title}>Search</Text>
        </View>
        <View style={styles.down}>
          <View style={styles.box}>
            <TextInput
              style={styles.textInput}
              value={search}
              placeholder="search here"
              underlineColorAndroid="transparent"
              onChangeText={text => searchFilter(text)}
            />
            <Icon name="search1" size={30} style={styles.iconSearch} />
          </View>
        </View>
        <View>
          <FlatList
            data={filterData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
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

  titleBack: {
    fontSize: 30,
    color: 'white',
    marginTop: 17,
    marginLeft: 10,
  },

  itemStyle: {
    padding: 15,
    marginLeft: 10,
    color: 'white',
  },
});

export default Search;
