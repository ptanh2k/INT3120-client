/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Login from './src/screen/Login';

const App = () => {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
};

export default App;
