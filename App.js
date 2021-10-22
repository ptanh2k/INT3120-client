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
import BottomTabs from './src/components/BottomTab';
import Search from './src/screen/Search';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './src/screen/Profile';
const Stack = createStackNavigator();

const App = () => {
  //Hide splash screen on app load
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <BottomTabs /> */}
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
