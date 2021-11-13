import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeHeader = ({route, navigation, options}) => {
  return (
    <View style={styles.container}>
      {/* {route.params.name && (
        <Text style={styles.title}>{route.params.name}</Text>
      )} */}
      <View style={styles.openSearchBtn}>
        <Pressable
          style={styles.searchBtn}
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <AntDesign name="search1" size={20} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  openSearchBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
});

export default HomeHeader;
