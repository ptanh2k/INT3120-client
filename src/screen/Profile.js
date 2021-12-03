import React, {useContext} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Container from '../components/Container';

import AuthContext from '../context/AuthContext';

const Profile = ({route}) => {
  const {handleLogout} = useContext(AuthContext);

  console.log(route);

  const {username} = route.params;

  return (
    <Container style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={styles.avatarAndName}>
          <Avatar.Image
            source={require('../asset/images/avata_test.jpg')}
            size={100}
          />
          <View style={styles.userName}>
            <Title
              style={
                (styles.title, {marginTop: 15, marginBottom: 5, color: 'white'})
              }>
              {username}
            </Title>
          </View>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
          <Title style={styles.follow}>1</Title>
          <Caption style={styles.follow}>Following</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title style={styles.follow}>1</Title>
          <Caption style={styles.follow}>Follower</Caption>
        </View>
      </View>
      <View>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <AntDesign
              name="linechart"
              size={20}
              style={styles.lineChartIcon}
              color="#fff"
            />
            <Text style={styles.statText}>Stats</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <AntDesign
              name="download"
              size={20}
              style={styles.downloadIcon}
              color="#fff"
            />
            <Text style={styles.downloadText}>Downloads</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple
          onPress={() => {
            Alert.alert('hoang dep trai');
          }}>
          <View style={styles.menuItem}>
            <AntDesign
              name="heart"
              size={20}
              style={styles.heartIcon}
              color="#fff"
            />
            <Text style={styles.heartText}>Likes</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <AntDesign
              name="dashboard"
              size={20}
              style={styles.dashboardIcon}
              color="#fff"
            />
            <Text style={styles.listenHistory}>Listen History</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => handleLogout()}>
          <View style={styles.menuItem}>
            <AntDesign
              name="logout"
              size={20}
              style={styles.logoutIcon}
              color="#fff"
            />
            <Text style={styles.logOutText}>Log Out</Text>
          </View>
        </TouchableRipple>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {},
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  userInfoSection: {},
  avatarAndName: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 15,
  },
  userName: {
    marginLeft: 15,
  },
  caption: {
    color: 'white',
  },
  phoneNumber: {
    marginLeft: 10,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
  },
  infoBoxWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoBox: {
    width: '50%',
    borderRightColor: '#dddddd',
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationText: {
    marginLeft: 10,
    color: 'white',
  },
  menuItem: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  dashboardIcon: {
    marginLeft: 10,
  },
  heartIcon: {
    marginLeft: 10,
  },
  fileIcon: {
    marginLeft: 10,
  },
  lineChartIcon: {
    marginLeft: 10,
  },
  downloadIcon: {
    marginLeft: 10,
  },
  mailIcon: {
    marginLeft: 10,
    color: 'white',
  },
  phoneIcon: {
    marginLeft: 10,
    color: 'white',
  },
  locationIcon: {
    marginLeft: 10,
    color: 'white',
  },
  logoutIcon: {
    marginLeft: 10,
    color: 'white',
  },
  listenHistory: {
    marginLeft: 30,
    color: 'white',
  },
  mailText: {
    marginLeft: 10,
    color: 'white',
  },
  statText: {
    marginLeft: 30,
    color: 'white',
  },
  fileText: {
    marginLeft: 30,
    color: 'white',
  },
  downloadText: {
    marginLeft: 30,
    color: 'white',
  },
  heartText: {
    marginLeft: 30,
    color: 'white',
  },
  logOutText: {
    marginLeft: 30,
    color: 'white',
  },
  follow: {
    color: 'white',
  },
});

export default Profile;
