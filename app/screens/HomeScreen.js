import React, {useState, useRef} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {fontSize, HEIGHT, WIDTH} from '../styles/dimensions';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {styles} from '../styles/styledComponent';
import {color} from '../styles/color';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
    const navigation=useNavigation()
  return (
    <SafeAreaView style={[styles.mainComponent,{alignItems:'center',justifyContent:'center'}]}>
      
      <Text style={{alignSelf:'center',color:'#fff',textAlignVertical:'center'}}>Welcome User</Text>
    
    </SafeAreaView>
  );
};

export default HomeScreen;
