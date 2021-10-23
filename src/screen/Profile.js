import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  return (
    <View style={styles.background}>
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
              Duc Anh C
            </Title>
            <Caption style={styles.caption}>@duc.anh</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="enviromento" size={20} style={styles.locationIcon} />
          <Text style={styles.locationText}>Ha Noi, Viet Nam</Text>
        </View>

        <View style={styles.row}>
          <Icon name="phone" size={20} style={styles.phoneIcon} />
          <Text style={styles.phoneNumber}>113</Text>
        </View>

        <View style={styles.row}>
          <Icon name="mail" size={20} style={styles.mailIcon} />
          <Text style={styles.mailText}>duc.anh.c@gmail.com</Text>
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
            <Icon name="linechart" size={20} style={styles.lineChartIcon} />
            <Text style={styles.statText}>Stats</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="download" size={20} style={styles.downloadIcon} />
            <Text style={styles.downloadText}>Downloads</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="file1" size={20} style={styles.fileIcon} />
            <Text style={styles.fileText}>Files</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple
          onPress={() => {
            Alert.alert('hoang dep trai');
          }}>
          <View style={styles.menuItem}>
            <Icon name="heart" size={20} style={styles.heartIcon} />
            <Text style={styles.heartText}>Likes</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="dashboard" size={20} style={styles.dashboardIcon} />
            <Text style={styles.listenHistory}>Listen History</Text>
          </View>
        </TouchableRipple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  background: {
    backgroundColor: '#3b3a3a',
    flex: 1,
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
    color: 'blue',
  },
  listenHistory: {
    marginLeft: 30,
    color: 'white',
  },
  heartIcon: {
    marginLeft: 10,
    color: 'blue',
  },
  fileIcon: {
    marginLeft: 10,
    color: 'blue',
  },
  lineChartIcon: {
    marginLeft: 10,
    color: 'blue',
  },
  downloadIcon: {
    marginLeft: 10,
    color: 'blue',
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
  follow: {
    color: 'white',
  },
});

export default Profile;
