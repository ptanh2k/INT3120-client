import React from 'react';
import {Alert, Pressable, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/AntDesign';

import Home from '../screen/Home';
import Search from '../screen/Search';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Home',
          headerRight: () => {
            return (
              <Pressable style={styles.searchBtn} onPress={()=> {
                navigation.navigate("Search")
              }}>
                <Icon name="search1" size={20} />
              </Pressable>
            );
          },
        }}
      />
      
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  searchBtn: {
    marginRight: 15,
  },
});

export default HomeStack;
