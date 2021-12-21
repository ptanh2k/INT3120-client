import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import {Modal, Portal, Button} from 'react-native-paper';

import songService from '../services/songService';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const PlaylistModal = ({showModal, setShowModal, user, song}) => {
  const [allPlaylist, setAllPlaylist] = useState([]);
  const [addBtnActive, setAddBtnActive] = useState(true);
  const [selectedList, setSelectedList] = useState(null);

  useEffect(() => {
    songService.getUserPlaylist(user).then(playlist => {
      setAllPlaylist(playlist);
    });
  }, [user]);

  const addToPlaylist = (songId, playlistId) => {
    const selected = {
      songId: songId,
      playlistId: playlistId,
    };

    songService.addSongToPlaylist(selected).then(() => {
      ToastAndroid.showWithGravity(
        'Song added to playlist',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    });

    setShowModal(false);
  };

  return (
    <>
      <Portal>
        <Modal
          visible={showModal}
          onDismiss={() => setShowModal(false)}
          contentContainerStyle={styles.containerStyle}>
          <FlatList
            data={allPlaylist}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.listContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setAddBtnActive(false);
                    setSelectedList(item.id);
                  }}>
                  <Text style={styles.playlist}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <View style={styles.btnContainer}>
            <Button
              disabled={addBtnActive}
              style={styles.addBtn}
              mode="contained"
              onPress={() => addToPlaylist(song.id, selectedList)}>
              Add
            </Button>
            <Button
              style={styles.cancelBtn}
              mode="contained"
              onPress={() => setShowModal(false)}>
              Cancel
            </Button>
          </View>
        </Modal>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
    padding: 20,
    height: screenHeight / 1.75,
    marginLeft: screenWidth / 20,
    marginRight: screenWidth / 20,
  },
  listContainer: {
    borderColor: 'gray',
    borderTopWidth: 0.7,
    justifyContent: 'center',
    height: screenHeight / 18,
  },
  playlist: {
    color: 'black',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtn: {
    width: 20,
  },
  cancelBtn: {
    width: 100,
    marginLeft: 60,
  },
});

export default PlaylistModal;
