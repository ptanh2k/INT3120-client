import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
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

const Login = () => {
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
              placeholder="Enter your email "
            />
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonTitle}>LOGIN</Text>
          </TouchableOpacity>
          <Divider style={styles.divider} />
          {/* <Icon.Button name="facebook" style = {styles.facebookButton}  background="#3b5998" >
            <Text style={styles.loginButtonTitle}>Login with facebook</Text>
          </Icon.Button> */}
          <TouchableOpacity style={styles.loginButtonTitle}>
            <Icon name="facebook-square" size={60} />
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

  facebookButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
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

export default Login;
