import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {SafeAreaView, Avatar, Title, Caption, TouchableRipple} from "react-native-paper"
import Icon from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  return (
    <View style={styles.background}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection:'row', marginLeft: 15, marginTop: 15}}>
          <Avatar.Image
            source={require("../asset/images/avata_test.jpg")}
            size={100}

          />
          <View style={{marginLeft: 15}}>
            <Title style={styles.title, {marginTop:15, marginBottom: 5, color: "white"}}>Duc Anh C</Title>
            <Caption style={styles.caption}>@duc.anh</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
        <Icon name="enviromento" size={20} style={{marginLeft: 10, color:"white"}} />
          <Text style={{marginLeft: 10, color: "white"}}>Ha Noi, Viet Nam</Text>
        </View>

        <View style={styles.row}>
        <Icon name="phone" size={20} style={{marginLeft: 10, color:"white"}} />
          <Text style={{marginLeft: 10, color: "white"}}>113</Text>
        </View>

        <View style={styles.row}>
        <Icon name="mail" size={20} style={{marginLeft: 10, color: "white"}} />
          <Text style={{marginLeft: 10, color: "white"}}>duc.anh.c@gmail.com</Text>
        </View>

      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
          <Title style={{color: "white"}}>1</Title>
          <Caption style={{color: "white"}}>Following</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title style={{color: "white"}}>1</Title>
          <Caption style={{color: "white"}}>Follower</Caption>
        </View>
      </View>
      <View>
        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}> 
            <Icon name="linechart" size={20} style={{marginLeft:10, color: "blue"}} />
            <Text style={{marginLeft: 30,color:"white"}}>Stats</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}> 
            <Icon name="download" size={20} style={{marginLeft:10, color: "blue"}} />
            <Text style={{marginLeft: 30,color:"white"}}>Downloads</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}> 
            <Icon name="file1" size={20} style={{marginLeft:10, color: "blue"}} />
            <Text style={{marginLeft: 30, color:"white"}}>Files</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={()=>{Alert.alert("hoang dep trai")}}>
          <View style={styles.menuItem}> 
            <Icon name="heart" size={20} style={{marginLeft:10, color: "blue"}} />
            <Text style={{marginLeft: 30, color:"white"}}>tym</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple  onPress={()=>{}}>
          <View style={styles.menuItem}> 
            <Icon name="dashboard" size={20} style={{marginLeft:10, color: "blue"}} />
            <Text style={{marginLeft: 30, color:"white"}}>Listen History</Text>
          </View>
        </TouchableRipple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  background: {
    backgroundColor: "#3b3a3a",
    flex:1,
  },
  userInfoSection: {

  },
  caption: {
    color: "white"
  },

  row:{
    flexDirection: 'row',
    marginTop: 20
  }, 
  infoBoxWrapper:{
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoBox: {
    width: "50%",
    borderRightColor: "#dddddd",
    borderRightWidth: 1,
    alignItems:'center',
    justifyContent: 'center',
  },

  menuItem:{
    flexDirection:'row',
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 20,
  }
  
});

export default Profile;
