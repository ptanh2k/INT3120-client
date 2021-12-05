import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../components/Container';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {lauchCamera} from 'react-native-image-crop-picker';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import {useState} from 'react';

const editProfile = ({navigation}) => {
  const [image, setImage] = useState();
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };
  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const fall = new Animated.Value(1);
  const bs = React.createRef();
  return (
    <View>
      <BottomSheet
        ref={bs}
        snapPoints={[300, -150]}
        renderHeader={renderHeader}
        renderContent={renderInner}
        initialSnap={1}
        callbackNode={fall}
        enabledContentGestureInteraction={true}
      />
      <Animated.View
        style={{opacity: Animated.add(0.1, Animated.multiply(fall, 1.0))}}>
        <View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <View style={styles.imageButton}>
                <ImageBackground
                  style={{height: 150, width: 150}}
                  source={{uri: image}}
                  imageStyle={{borderRadius: 10}}>
                  <View style={styles.iconView}>
                    <AntDesign
                      name="camera"
                      size={35}
                      color="#fff"
                      style={styles.cameraIcon}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.action}>
          <AntDesign name="user" size={20} style={styles.textInput} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <AntDesign name="user" size={20} style={styles.textInput} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <AntDesign name="phone" size={20} style={styles.textInput} />
          <TextInput
            keyboardType="number-pad"
            placeholder="Phone"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <AntDesign name="mail" size={20} style={styles.textInput} />
          <TextInput
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <AntDesign name="earth" size={20} style={styles.textInput} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <AntDesign name="enviromento" size={20} style={styles.textInput} />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>SUBMIT</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -1},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },

  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  imageButton: {
    alignItems: 'center',
    width: 150,
    height: 150,
    justifyContent: 'center',
  },
  cameraIcon: {
    opacity: 0.7,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
  },
  action: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 15,
  },

  commandButton: {
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#FF6347',
    borderRadius: 20,
    width: 300,
    justifyContent: 'center',
    marginLeft: 55,
  },

  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default editProfile;
