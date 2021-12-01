/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useReducer, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import EncryptedStorage from 'react-native-encrypted-storage';

import Login from './src/screen/Login';
import BottomTabs from './src/components/BottomTab';
import Search from './src/screen/Search';
import HomeStack from './src/routes/HomeStack';
import ProfileStack from './src/routes/ProfileStack';
import Player from './src/components/player/Player';

import Register from './src/screen/Register';
import editProfile from './src/screen/editProfile';
import editprofileStack from './src/routes/editProfileStack';

import AuthContext from './src/context/AuthContext';
import {reducer, initialState, ACTIONS} from './src/utils/reducer';
import loginService from './src/services/loginService';
import {Alert} from 'react-native';

const Stack = createStackNavigator();

const App = ({navigation}) => {
  //Hide splash screen on app load
  useEffect(() => {
    SplashScreen.hide();
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await EncryptedStorage.getItem('userToken');
      } catch (e) {
        console.log('Restore token failed');
      }
      dispatch({type: ACTIONS.RESTORE_TOKEN, token: userToken});
    };
    bootstrapAsync();
  }, []);

  const storeData = async value => {
    try {
      await EncryptedStorage.setItem('userToken', value.access_token);
    } catch (e) {
      console.log('Storing token failed');
    }
  };

  const authContext = useMemo(
    () => ({
      handleLogin: async data => {
        try {
          const user = await loginService.login(data);
          storeData(user);
          dispatch({type: ACTIONS.LOGIN, token: user.access_token});
        } catch (e) {
          Alert.alert('Wrong credentials');
        }
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {state.userToken === null ? (
              <>
                <Stack.Screen
                  name="login"
                  component={Login}
                  options={{
                    animationTypeForReplace: state.isLoggedOut ? 'pop' : 'push',
                  }}
                />
                <Stack.Screen name="Register" component={Register} />
              </>
            ) : (
              <>
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
                <Stack.Screen name="Profile" component={ProfileStack} />
                <Stack.Screen name="HomeStack" component={HomeStack} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Player" component={Player} />
                <Stack.Screen name="editProfile" component={editProfile} />
                <Stack.Screen
                  name="editprofileStack"
                  component={editprofileStack}
                />
                <Stack.Screen name="ProfileStack" component={ProfileStack} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
};

export default App;
