import React, {useState} from 'react';
import {Pressable, Dimensions, StyleSheet, TextInput} from 'react-native';
import {Modal, Portal, Button} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';

import Entypo from 'react-native-vector-icons/Entypo';
import Playlist from '../screen/Playlist';

const Stack = createStackNavigator();

const screenWidth = Dimensions.get('window').width;

const PlaylistStack = ({route, navigation}) => {
  const [listName, setListName] = useState('');
  const [currList, setCurrList] = useState([]);
  const [visible, setVisible] = useState(false);

  const showAddModal = () => setVisible(true);
  const createPlaylist = () => {
    setCurrList([...currList, listName]);
    setListName('');
    setVisible(false);
  };

  console.log(currList);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Playlist"
        component={Playlist}
        initialParams={{username: route.params.username, currList: currList}}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0C0C25',
          },
          headerTintColor: '#fff',
          headerLeft: () => {
            return (
              <Pressable
                style={styles.backBtn}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Entypo name="chevron-left" size={20} color="#fff" />
              </Pressable>
            );
          },
          headerRight: () => {
            return (
              <>
                <Portal>
                  <Modal
                    visible={visible}
                    onDismiss={() => setVisible(false)}
                    contentContainerStyle={styles.containerStyle}>
                    <TextInput
                      placeholder="Enter your custom playlist name"
                      onChangeText={text => setListName(text)}
                      defaultValue={listName}
                    />
                    <Button
                      mode="contained"
                      onPress={() => createPlaylist()}
                      disabled={listName.length > 0 ? false : true}>
                      Create playlist
                    </Button>
                  </Modal>
                </Portal>
                <Pressable style={styles.addBtn} onPress={() => showAddModal()}>
                  <Entypo name="plus" size={20} color="#fff" />
                </Pressable>
              </>
            );
          },
        }}
      />
      {/* {props => (
          <Playlist listName={listName} setListName={setListName} {...props} />
        )} */}
      {/* </Stack.Screen> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: screenWidth / 30,
  },
  addBtn: {
    marginRight: screenWidth / 30,
  },
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
    marginLeft: screenWidth / 20,
    marginRight: screenWidth / 20,
  },
});

export default PlaylistStack;
