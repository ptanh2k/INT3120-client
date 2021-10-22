import React, {useState} from 'react';
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
import BottomTabs from '../components/BottomTab';
import Icon from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
              onChangeText={mail => setMail(mail)}
              defaultValue={mail}
            />
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              secureTextEntry={isSecureEntry}
              onChangeText={pass => setPass(pass)}
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

          <TouchableOpacity style={styles.facebookButton}>
            <Icon
              name="facebook-square"
              size={40}
              style={styles.logoFacebook}
            />
            <Text style={styles.facebookButtonTitle}>Login with facebook</Text>
          </TouchableOpacity>
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
    // marginLeft: 40
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
