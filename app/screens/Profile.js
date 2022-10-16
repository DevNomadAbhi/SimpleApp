import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,Alert, ToastAndroid
} from 'react-native';
import {color} from '../styles/color';
import {styles} from '../styles/styledComponent';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import FastImage from 'react-native-fast-image';
import { getDataOfUser,  } from '../database/UserData';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile =  () => {
  const [name, setName] = useState(null);
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState(false);
  const navigation = useNavigation();

  useEffect(()=>{
    data()
},[])



const data = async()=> 

{
let userData=await getDataOfUser()
console.log(userData,'hhhh');
setName(userData.fname+' '+userData.lname)
setMobile(userData.mobile)
setEmail(userData.email)
}
const logout = () => {
    Alert.alert(
      'Logout',
      'Do you want to logout?',
      [
        {text: 'No', onPress: () => {}},
        {
          text: 'Yes',
          onPress: () => {
            logoutAPI();
          },
        },
      ],
      {cancelable: true},
    );
  };
  const logoutAPI = async () => {
    try {
      const logoutUser = await AsyncStorage.clear();
      //await getDataOfUser()
      // AsyncStorage.clear()
      // Logout()
ToastAndroid.showWithGravity('user logged out',ToastAndroid.BOTTOM,ToastAndroid.SHORT,0,200)
      navigation.replace('SignIn');
    } catch (e) {}
  };


  return (
    <SafeAreaView style={styles.mainComponent}>
    
      <View style={styles.topMargin}>
        <View style={{justifyContent:'center'}}>
         

          <Text
            style={[
              styles.spalshText,
              {marginStart: 15, },
            ]}>
            Profile
          </Text>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: color.colorWhite,
            marginTop: 10,
            marginBottom: 25,
          }}
        />
      
      
          <View style={[styles.profileImage,{alignSelf:'center'}]}>
            <Image
              source={
              require('../assets/user.png')
                 
              }
              resizeMode={FastImage.resizeMode.cover}
              style={{height: 80, width: 80, borderRadius: 100 / 2}}
            />
            </View>
       
        <Text style={[styles.placeholder, {marginTop: 25}]}>Full Name </Text>
     
          <Text style={[styles.formText]}>{name} </Text>
         
       

        <Text style={[styles.placeholder, {marginTop: 25}]}>Mobile </Text>
    
          <Text style={[styles.formText]}>{mobile}</Text>
      
        <Text style={[styles.placeholder, {marginTop: 25}]}>Email </Text>
                <Text style={[styles.formText]}>{email} </Text>
         

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '35%',
          }}
          onPress={() => logout()}>
          <View style={styles.button}>
            <Text style={styles.formText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
