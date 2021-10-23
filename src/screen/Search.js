import React from 'react';
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

const Search = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
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
            <TextInput style={styles.textInput} />
            <Icon name="search1" size={30} style={styles.iconSearch} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3e3f',
    flexDirection: 'column',
  },

  up: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  down: {
    flex: 9,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  textInput: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#6d6e6f',
    marginLeft: 45,
  },

  title: {
    fontSize: 30,
    color: 'white',
    marginTop: 20,
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
    marginTop: 27,
    marginLeft: 10,
  },
});

export default Search;
