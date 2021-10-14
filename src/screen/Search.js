import React from 'react';
import Icon from "react-native-vector-icons/AntDesign"
import {View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native'

const Search = () => {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style = {styles.container}>
                <View style={styles.up}>
                    <Text style={styles.title}>Search</Text>
                </View>
                <View style={styles.down}>
                    <View style={styles.box}>
                        <TextInput style = {styles.textInput}></TextInput>
                        <Icon name='search1' size={30} style={styles.iconSearch}/>
                    </View>
                </View>    
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3d3e3f',
        // justifyContent:'center',
        flexDirection:'column',
        // alignItems:'center',
    },

    up:{
        flex: 1,
        backgroundColor:'black'
    },
    down: {
        flex: 9,
        // justifyContent: 'center',
        flexDirection:'row',
        // alignItems:'center',
        backgroundColor:'black'
    },
    textInput:{
        // width:400,
        // height:45,
        flex:1,
        // borderBottomWidth: 1,
        // borderColor: '#000',
        // paddingBottom: 10,
        borderRadius:3,
        // marginTop:10,
        backgroundColor:'#6d6e6f',
        marginLeft: 45
    },

    title:{
        fontSize:30,
        color:'white',
        marginTop:20
    },

    iconSearch: {
        position: 'absolute',
        left: 4,
        marginTop: 7,
        color:'white'
    },
    box: {
        flex:1, 
        width:400,
        height:45,
        backgroundColor:'#6d6e6f',
        marginTop: 10,
        borderRadius:3
    }

})
export default Search;