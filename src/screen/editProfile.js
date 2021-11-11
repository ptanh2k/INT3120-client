import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../components/Container';
import AntDesign from 'react-native-vector-icons/AntDesign';

const editProfile = ({navigation}) => {
  return (
    <View>
      <View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.imageButton}>
              <ImageBackground
                style={{height: 150, width: 150}}
                source={require('../asset/images/avata_test.jpg')}
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
      <View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
