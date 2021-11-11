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
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Login from './src/screen/Login';
import BottomTabs from './src/components/BottomTab';
import Search from './src/screen/Search';
import HomeStack from './src/routes/HomeStack';
import ProfileStack from './src/routes/ProfileStack';
import Player from './src/components/player/Player';

import Register from './src/screen/Register';
import editProfile from './src/screen/editProfile';
import editprofileStack from './src/routes/editProfileStack';

const Stack = createStackNavigator();

const App = () => {
  //Hide splash screen on app load
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {/* <Stack.Screen name="login" component={Login} /> */}
          {/* Comment Login for faster testing */}
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="Profile" component={ProfileStack} />
          <Stack.Screen name="HomeStack" component={HomeStack} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Play" component={Player} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="editProfile" component={editProfile} />
          <Stack.Screen name="editprofileStack" component={editprofileStack} />
          <Stack.Screen name="ProfileStack" component={ProfileStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
