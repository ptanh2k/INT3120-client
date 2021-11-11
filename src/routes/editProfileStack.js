import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import editProfile from '../screen/editProfile';
import ProfileStack from './ProfileStack';
const Stack = createStackNavigator();

const editprofileStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="editProfile"
        component={editProfile}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Edit Profile',

          headerLeft: () => {
            return (
              <Pressable
                style={styles.searchBtn}
                onPress={() => {
                  navigation.navigate('ProfileStack');
                }}>
                <Icon2 name="chevron-left" size={20} />
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

export default editprofileStack;
