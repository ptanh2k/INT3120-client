import React from 'react';
import {Pressable, StyleSheet, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Profile from '../screen/Profile';

const {width, height} = Dimensions.get('window');

const Stack = createStackNavigator();

const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Profile',
          headerStyle: {
            backgroundColor: '#0C0C25',
          },
          headerTintColor: '#fff',
          headerRight: () => {
            return (
              <Pressable
                style={styles.settingBtn}
                onPress={() => {
                  navigation.navigate('editprofileStack');
                }}>
                <Icon name="edit" size={20} color="#fff" />
              </Pressable>
            );
          },
          headerLeft: () => {
            return (
              <Pressable
                style={styles.backBtn}
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Icon2 name="chevron-left" size={20} color="#fff" />
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
    marginRight: width / 30,
  },
  backBtn: {
    marginLeft: width / 30,
  },
});

export default ProfileStack;
