import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import HomeStack from '../routes/HomeStack';
import ProfileStack from '../routes/ProfileStack';
import PlayListStack from '../routes/PlayListStack';

const Tab = createBottomTabNavigator();

const BottomTabs = ({route, navigation}) => {
  console.log(route);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // eslint-disable-next-line no-shadow
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'ProfileTab') {
            iconName = 'user';
          }

          return route.name === 'PlaylistTab' ? (
            <Entypo name="folder-music" size={20} />
          ) : (
            <AntDesign name={iconName} size={20} />
          );
        },
        tabBarStyle: {
          backgroundColor: '#674EB1',
        },
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{tabBarLabel: 'Home'}}
        initialParams={{username: route.params.username}}
      />
      <Tab.Screen
        name="PlaylistTab"
        component={PlayListStack}
        options={{tabBarLabel: 'My Playlist'}}
        initialParams={{username: route.params.username}}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{tabBarLabel: 'Profile'}}
        initialParams={{username: route.params.username}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
