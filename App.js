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
import * as KeyChain from 'react-native-keychain';

import Login from './src/screen/Login';
import BottomTabs from './src/components/BottomTab';
import Search from './src/screen/Search';
import HomeStack from './src/routes/HomeStack';
import ProfileStack from './src/routes/ProfileStack';
import Player from './src/components/player/Player';
import Register from './src/screen/Register';
import editProfile from './src/screen/editProfile';
import editprofileStack from './src/routes/editProfileStack';
import FavoriteStack from './src/routes/FavoriteStack';

import AuthContext from './src/context/AuthContext';
import {reducer, initialState, ACTIONS} from './src/utils/reducer';
import loginService from './src/services/loginService';
import songService from './src/services/songService';
import {Alert} from 'react-native';
import PlayListStack from './src/routes/PlayListStack';

import {LogBox} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

LogBox.ignoreLogs(['EventEmitter.removeListener']);

const Stack = createStackNavigator();

const App = ({navigation}) => {
  //Hide splash screen on app load
  useEffect(() => {
    SplashScreen.hide();
  });
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let credentials;

      try {
        credentials = await KeyChain.getGenericPassword();
        songService.setToken(credentials.password);
      } catch (e) {
        console.log('Restore token failed');
      }
      dispatch({
        type: ACTIONS.RESTORE_TOKEN,
        token: credentials.token,
        username: credentials.username,
      });
    };
    bootstrapAsync();
  }, []);

  const storeData = async value => {
    try {
      await KeyChain.setGenericPassword(value.username, value.access_token);
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
          songService.setToken(user.access_token);
          dispatch({
            type: ACTIONS.LOGIN,
            token: user.access_token,
            username: user.username,
          });
        } catch (e) {
          Alert.alert('Wrong credentials');
        }
      },
      handleLogout: async () => {
        try {
          await KeyChain.resetGenericPassword();
          songService.setToken(null);
          dispatch({type: ACTIONS.LOGOUT});
        } catch (e) {
          console.log('Failed');
        }
      },
      handleFBLogin: async () => {
        try {
          let result = await LoginManager.logInWithPermissions([
            'public_profile',
          ]);
          if (result.isCancelled) {
            Alert.alert('Login was cancelled');
          } else {
            const accessToken = await AccessToken.getCurrentAccessToken();

            const profile = await loginService.loginFb(
              accessToken.accessToken.toString(),
            );

            await KeyChain.setGenericPassword(
              profile.name,
              accessToken.accessToken.toString(),
            );
            songService.setToken(accessToken.accessToken.toString());
            dispatch({
              type: ACTIONS.LOGIN,
              token: accessToken.accessToken.toString(),
              username: profile.name,
            });
          }
        } catch (error) {
          Alert.alert('Error:' + error);
          console.log(error);
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
                <Stack.Screen
                  name="BottomTabs"
                  component={BottomTabs}
                  initialParams={{
                    username: state.userName,
                  }}
                />
                <Stack.Screen
                  name="ProfileStack"
                  component={ProfileStack}
                  initialParams={{
                    username: state.userName,
                  }}
                />
                <Stack.Screen
                  name="HomeStack"
                  component={HomeStack}
                  initialParams={{
                    username: state.userName,
                  }}
                />
                <Stack.Screen
                  name="PlayListStack"
                  component={PlayListStack}
                  initialParams={{
                    username: state.userName,
                  }}
                />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen
                  name="Player"
                  component={Player}
                  initialParams={{
                    username: state.userName,
                  }}
                />
                <Stack.Screen
                  name="editProfile"
                  component={editProfile}
                  initialParams={{
                    username: state.userName,
                  }}
                />
                <Stack.Screen
                  name="editprofileStack"
                  component={editprofileStack}
                  initialParams={{
                    username: state.userName,
                  }}
                />
                <Stack.Screen
                  name="FavoriteStack"
                  component={FavoriteStack}
                  initialParams={{
                    username: state.userName,
                  }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
};

export default App;
