import React from 'react';
import {Pressable, Dimensions, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../screen/Home';

const Stack = createStackNavigator();

const screenWidth = Dimensions.get('window').width;

const HomeStack = ({route, navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{username: route.params.username}}
        options={{
          headerLeft: () => null,
          headerTitle: 'Home',
          headerStyle: {
            backgroundColor: '#0C0C25',
          },
          headerTintColor: '#fff',
          headerRight: () => {
            return (
              <Pressable
                style={styles.searchBtn}
                onPress={() => {
                  navigation.navigate('Search');
                }}>
                <AntDesign name="search1" size={20} color="#fff" />
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
    marginRight: screenWidth / 30,
  },
});

export default HomeStack;
