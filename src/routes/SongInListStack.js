import React from 'react';
import {Pressable, Dimensions, StyleSheet} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

import {createStackNavigator} from '@react-navigation/stack';

import SongInList from '../screen/SongInList';

const screenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator();

const SongInListStack = ({route, navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={route.params.title}
        component={SongInList}
        initialParams={{id: route.params.id, user: route.params.user}}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0C0C25',
          },
          headerTintColor: '#fff',
          headerLeft: () => {
            return (
              <Pressable
                style={styles.backBtn}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Entypo name="chevron-left" size={20} color="#fff" />
              </Pressable>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: screenWidth / 30,
  },
});

export default SongInListStack;
