import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import registerService from '../services/registerService';

import Container from '../components/Container';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleRegister = async info => {
    try {
      const registeredUser = await registerService.register(info);
      if (registeredUser) {
        Alert.alert('User registered successfully!');
      }
    } catch (e) {
      Alert.alert('This user is already exist');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container style={styles.container}>
        <View style={styles.up}>
          <Image
            style={styles.logo}
            source={require('../asset/images/logo.png')}
          />
        </View>
        <View style={styles.down}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              textContentType="username"
              placeholder="Enter username"
              onChangeText={text => setUsername(text)}
              defaultValue={username}
            />
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Enter your password"
              onChangeText={text => setPassword(text)}
              defaultValue={password}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Re-enter your password"
              onChangeText={text => setPassword2(text)}
              defaultValue={password2}
            />
          </View>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => handleRegister({username, password, password2})}>
            <Text style={styles.registerButtonTitle}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              navigation.navigate('login');
            }}>
            <Text style={styles.loginButtonTitle}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  up: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#5091CC',
  },
  down: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: '#5091CC',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: 'red',
    width: 400,
    fontSize: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255, 0.2)',
    marginBottom: 20,
  },

  textInput: {
    width: 280,
    height: 45,
  },

  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(221, 97, 97)',
    marginTop: 20,
  },

  loginButtonTitle: {
    fontSize: 18,
    color: 'white',
  },

  registerButtonTitle: {
    fontSize: 18,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 40
  },

  registerButton: {
    flexDirection: 'row',
    width: 300,
    height: 45,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4267B2',
    marginTop: 20,
  },

  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black',
  },

  textOR: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  divider: {
    flexDirection: 'row',
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Register;
