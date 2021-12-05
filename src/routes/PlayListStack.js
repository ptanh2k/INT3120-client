import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import editProfile from '../screen/editProfile';
import ProfileStack from './ProfileStack';
import PlayList from '../screen/PlayList';
const Stack = createStackNavigator();

const PlayListStack = ({route, navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlayList"
        component={PlayList}
        initialParams={{username: route.params.username}}
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => {
            return (
              <Pressable
                style={styles.searchBtn}
                onPress={() => {
                  navigation.navigate('BottomTabs');
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

export default PlayListStack;
