import React from 'react';
import {Pressable, Dimensions, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Entypo from 'react-native-vector-icons/Entypo';
import Favorite from '../screen/Favorite';

const Stack = createStackNavigator();

const screenWidth = Dimensions.get('window').width;

const FavoriteStack = ({route, navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        initialParams={{username: route.params.username}}
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
                  navigation.navigate('ProfileStack');
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

export default FavoriteStack;
