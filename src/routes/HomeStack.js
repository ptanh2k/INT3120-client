import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../screen/Home';
import HomeHeader from '../components/header/HomeHeader';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
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
          // header: ({navigation, route, options}) => (
          //   <HomeHeader
          //     route={route}
          //     navigation={navigation}
          //     options={options}
          //   />
          // ),
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
