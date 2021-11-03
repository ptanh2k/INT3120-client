import React, {useState, useEffect} from 'react';
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
import {LoginManager} from 'react-native-fbsdk';

import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import {ANDROID_CLIENT_ID, WEB_CLIENT_ID} from '@env';

import Icon from 'react-native-vector-icons/AntDesign';

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
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [logincheck, setLogin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      androidClientId: ANDROID_CLIENT_ID,
      forceCodeForRefreshToken: true,
      offlineAccess: true,
    });
    isSignedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayService();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Sign in cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing in');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play service not available');
      } else {
        console.log('Some other error');
      }
    }
  };

  const isSignedIn = async () => {
    const isSigned = await GoogleSignin.isSignedIn();
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!isSigned) {
      getCurrentUserInfo();
    } else {
      console.log('Please login');
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('User has not signed in yet');
      } else {
        console.log('Something went wrong. Unable to get info');
      }
    }
  };

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
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder="Enter your email"
              onChangeText={text => setMail(text)}
              defaultValue={mail}
            />
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              secureTextEntry={isSecureEntry}
              onChangeText={text => setPass(text)}
              defaultValue={pass}
            />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              if (account[0].user === mail && account[0].password === pass) {
                navigation.navigate('BottomTabs');
                setLogin(!logincheck);
              } else {
                Alert.alert('invalid!!!');
              }
            }}>
            {/* chuyen den BottomTab */}

            <Text style={styles.loginButtonTitle}>LOGIN</Text>
          </TouchableOpacity>

          <Divider style={styles.divider} />

          <TouchableOpacity
            style={styles.facebookButton}
            onPress={async () => {
              try {
                let result = await LoginManager.logInWithPermissions([
                  'public_profile',
                ]);
                if (result.isCancelled) {
                  Alert.alert('login was cancelled');
                } else {
                  navigation.navigate('BottomTabs');
                }
              } catch (error) {
                Alert.alert('loi:' + error);
                console.log(error);
              }
            }}>
            <Icon
              name="facebook-square"
              size={40}
              style={styles.logoFacebook}
            />
            <Text style={styles.facebookButtonTitle}>Login with facebook</Text>
          </TouchableOpacity>
          <GoogleSigninButton
            style={styles.googleSigninButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={loginWithGoogle}
          />
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

const account = [
  {
    user: 'admin',
    password: 'admin',
  },
  {
    user: 'hoang',
    password: 'hoang',
  },
];

export default Login;
