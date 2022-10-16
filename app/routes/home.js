import React, {useState, useRef} from 'react';
import {View, Text, Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
import { color } from '../styles/color';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';


export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor={color.cadbury}
      inactiveColor={color.chocolate}
      labelStyle={{fontSize: 10}}
      style={{marginBottom: Platform.OS == 'ios' ? 15 : 0}}
      barStyle={{backgroundColor: color.chocolateLight, height: 55}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home"
              color={'#000'}
              size={26}
              style={{}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account"
              color={'#000'}
              size={26}
              style={{}}
            />
          ),
        }}
      />

     
    </Tab.Navigator>
  );
}
