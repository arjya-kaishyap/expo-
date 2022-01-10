import React, { Component } from "react";
import {View,Text,StyleSheet,SafeAreaView,Platform,StatusBar,Image,Dimensions} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons'


import AppLoading from "expo-app-loading";

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }
  render(){
       return(
      <View style = {styles.container}>
        <View style = {styles.cardContainer}>
          <View style = {styles.authorContainer}>
            <View style = {styles.authorImageContainer}>
                <Image 
                source = {require("../assets/profile_img.png")}
                style = {styles.profileImage}
                ></Image>
                   </View>
                   <View style = {styles.authorNameContainer}>
                   <Text style = {styles.authorNameText}> {this.props.post.author} </Text>


       )









  }
  
  
  
  
  
  
  
  
  
  
  
  
  }