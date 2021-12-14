import React from 'react';
import {Pressable, StyleSheet, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Profile from '../screen/Profile';

const screenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator();

const ProfileStack = ({route, navigation}) => {
  console.log(route);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        initialParams={{username: route.params.username}}
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
                  navigation.goBack();
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
    marginRight: screenWidth / 30,
  },
  backBtn: {
    marginLeft: screenWidth / 30,
  },
});

export default ProfileStack;
