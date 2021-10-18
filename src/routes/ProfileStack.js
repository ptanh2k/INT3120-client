import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/AntDesign';

import Profile from '../screen/Profile';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: 'Profile',
          headerRight: () => {
            return (
              <Pressable style={styles.settingBtn}>
                <Icon name="setting" size={20} />
              </Pressable>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  settingBtn: {
    marginRight: 15,
  },
});

export default ProfileStack;
