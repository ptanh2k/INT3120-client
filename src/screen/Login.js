import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import AuthContext from '../context/AuthContext';

const Divider = props => {
  return (
    <View {...props}>
      <View style={styles.line} />
      <Text style={styles.textOR}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {handleLogin, handleFBLogin} = useContext(AuthContext);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.up}>
          <Image
            style={styles.logo}
            source={require('../asset/images/logo.png')}
          />
          {/* <Text style ={styles.title}>Nghe nhac moi luc moi noi</Text> */}
        </View>
        <View style={styles.down}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter yourt username"
              onChangeText={text => setUsername(text)}
              defaultValue={username}
            />
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              defaultValue={password}
            />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => handleLogin({username, password})}>
            {/* chuyen den BottomTab */}

            <Text style={styles.loginButtonTitle}>LOGIN</Text>
          </TouchableOpacity>

          <Divider style={styles.divider} />

          <TouchableOpacity
            style={styles.facebookButton}
            onPress={() => handleFBLogin()}>
            <Icon
              name="facebook-square"
              size={40}
              style={styles.logoFacebook}
            />
            <Text style={styles.facebookButtonTitle}>Login with facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.facebookButton}
            onPress={async () => {
              // _signIn();
            }}>
            <Icon
              name="facebook-square"
              size={40}
              style={styles.logoFacebook}
            />
            <Text style={styles.facebookButtonTitle}>Login with google</Text>
          </TouchableOpacity>

          <View style={styles.registerForm}>
            <Text>Need a new account?</Text>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#0C3D77',
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
  },

  loginButtonTitle: {
    fontSize: 18,
    color: 'white',
  },

  facebookButtonTitle: {
    fontSize: 18,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoFacebook: {
    justifyContent: 'space-between',
    left: 10,
    position: 'absolute',
  },

  facebookButton: {
    flexDirection: 'row',
    width: 300,
    height: 45,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4267B2',
  },

  googleSigninButton: {
    marginTop: 10,
    width: 300,
    height: 45,
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

  registerForm: {
    flexDirection: 'row',
    marginTop: 5,
  },

  registerButton: {
    marginLeft: 80,
  },
  registerText: {
    color: 'blue',
  },
});

export default Login;
