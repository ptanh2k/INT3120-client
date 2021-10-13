/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import Login from './src/screen/Login';

const App = () => {
  //Hide splash screen on app load
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
};

export default App;
