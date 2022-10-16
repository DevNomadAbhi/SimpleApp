import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {saveDataOfUser} from '../database/UserData';
import FastImage from 'react-native-fast-image';
import {styles} from '../styles/styledComponent';
import {color} from '../styles/color';
import {WIDTH} from '../styles/dimensions';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Moment from 'moment';
const SignUp = () => {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDOB] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [isDatePickerVisible,setisDatePickerVisible]=useState(false)

  const [emailValidError, setEmailValidError] = useState('');
  const [validPassword, setValidPassword] = useState('');
  const [step, setStep] = useState('1');
  const [address,setAddress]=useState('')
  const [postal,setPostal]=useState('')

  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const postalRef=useRef(null)
  const addressRef=useRef(null)
  const navigation = useNavigation();

  const handleValidEmail = value => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (value === undefined) {
      setEmailValidError('email address must be entered');
    } else if (reg.test(value) === false) {
      setEmailValidError('enter valid email address');
    } else if (reg.test(value) === true) {
      setEmailValidError('');
    }
    setEmail(value);
  };

  const handleValidPassword = value => {
    let reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,12}$/;

    if (!value) {
      setValidPassword('Enter your password');
    } else if (value.trim().length < 7) {
      setValidPassword('Password length should be 7 char min.');
    } else if (value.trim().length > 12) {
      setValidPassword('Password length should be 12 char max.');
    } else if (reg.test(value) === false) {
      setValidPassword(
        'Password should contain at least one uppercase letter, one lowercase letter,one number & a special character',
      );
    } else {
      setValidPassword('');
    }
    setPassword(value);
  };
 

  const onSubmitData = async () => {
    if (!email) {
      ToastAndroid.showWithGravity(
        'Enter email',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        200,
      );
    } else if (!password) {
      ToastAndroid.showWithGravity(
        'Enter your password',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        200,
      );
    } else if (!fname) {
      ToastAndroid.showWithGravity(
        'Enter your name',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        200,
      );
    }
    else if (!lname) {
      ToastAndroid.showWithGravity(
        'Enter your name',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        200,
      );
    }
    else if (!postal) {
      ToastAndroid.showWithGravity(
        'Enter your name',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        200,
      );
    }else if (!address) {
      ToastAndroid.showWithGravity(
        'Enter your name',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        200,
      );
    }
    else
    {
      let userData={
        email:email,
        fname:fname,
        lname:lname,
        password:password,
        postal:postal,
        dob:dob,
        address:address,
        mobile:mobile,
      }
      saveDataOfUser(userData,'SignUP data')
      navigation.navigate('Home')

    }
    
    //   try {
    //     const response = await axios.post(SignUp, {
    //       email: email,
    //       password: password,
    //     });
    //     const result = response.data;
    //     console.log(result);

    //     console.log(result.data.Token);
    //     console.log(result.data.Id, 'is the respected  id');

    //     if (result.message !== 'success') {
    //       showSnackBarOne('either password or email is incorrect');
    //     } else {
    //       let userData = {
    //         email: email,
    //         token: result.data.Token,
    //         id: result.data.Id,
    //       };
    //       saveDataOfUser(userData, 'data saved');
    //       console.log(userData);
    //       navigation.navigate('HomeScreen', {
    //         token: result.data.Token,
    //         id: result.data.Id,
    //       });
    //       showSnackBarOne('welcome');
    //     }
    //   } catch (error) {
    //     console.log(error, 'this is error');
    //   }
  };
 const showDatePicker = () => {
setisDatePickerVisible(true)  };

 const hideDatePicker = () => {
setisDatePickerVisible(false)  };

const  handleConfirm = dob => {
    setDOB(dob)
    hideDatePicker();
  };
  Moment.locale('en');
  let date=dob
  return (
    <SafeAreaView style={styles.mainComponent}>
      <View
        style={{
          marginTop: Platform.OS == 'android' ? 10 : 0,
        }}>
          

        <KeyboardAwareScrollView bounces={false}>
          <View style={{marginStart: 20, marginEnd: 20}}>
            <Image
              source={require('../assets/cadbury_splash/splash.png')}
              style={{
                height: 100,
                width: WIDTH - 40,
                resizeMode: 'contain',
                alignSelf: 'center',
                marginTop: 40,
                marginBottom: 40,
              }}
            />
          <Text style={[styles.spalshText, {alignSelf:'center'}]}>SignUp</Text>

            <View style={{marginTop: 15}}>
             
              {step === '1' && (
                <>
                  <Text style={{color:'#fff',marginBottom:10,alignSelf:'flex-end'}}>{`Step:${step}/2`}</Text>

                  <View style={styles.textInput}>
                    <TextInput
                      placeholder="First Name"
                      placeholderTextColor={color.colorWhite}
                      style={styles.placeholder}
                      onChangeText={name => setFName(name)}
                      value={fname}
                      ref={fnameRef}
                      onSubmitEditing={() => lnameRef.current.focus()}
                      blurOnSubmit={false}
                      returnKeyType="next"
                      underlineColorAndroid="transparent"
                      //underlineColorAndroid='transparent'                maxLength={20}
                    />
                  </View>
                  <View style={{marginTop: 10}} />

                  <View style={styles.textInput}>
                    <TextInput
                      placeholder="Last Name"
                      placeholderTextColor={color.colorWhite}
                      style={styles.placeholder}
                      onChangeText={name => setLName(name)}
                      value={lname}
                      ref={lnameRef}
                      onSubmitEditing={() => mobileRef.current.focus()}
                      blurOnSubmit={false}
                      returnKeyType="next"
                      underlineColorAndroid="transparent"
                      //underlineColorAndroid='transparent'                maxLength={20}
                    />
                  </View>
                  <View style={{marginTop: 10}} />

                  <View style={styles.textInput}>
                    <TextInput
                      placeholder="Mobile"
                      placeholderTextColor={color.colorWhite}
                      style={styles.placeholder}
                      onChangeText={mobile => setMobile(mobile)}
                      value={mobile}
                      ref={mobileRef}
                      onSubmitEditing={() => emailRef.current.focus()}
                      blurOnSubmit={false}
                      returnKeyType="next"
                      underlineColorAndroid="transparent"
                      keyboardType="number-pad"
                      maxLength={10}
                      //underlineColorAndroid='transparent'                maxLength={20}
                    />
                  </View>
                  <View style={{marginTop: 10}}>
                    <View style={styles.textInput}>
                      <TextInput
                        placeholder="Email"
                        placeholderTextColor={color.colorWhite}
                        style={styles.placeholder}
                        onChangeText={email => {
                          // setEmail(email);
                          handleValidEmail(email);
                        }}
                        value={email}
                        ref={emailRef}
                        blurOnSubmit={false}
                        returnKeyType="next"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        underlineColorAndroid="transparent" // maxLength={20}
                      />
                    </View>
                    <>
                      {emailValidError ? (
                        <Text style={styles.errorcode}>{emailValidError}</Text>
                      ) : null}
                    </>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',

                      marginTop: 25,
                      marginBottom: 10,
                    }}
                    onPress={() => setStep('2')}>
                    <View style={[styles.button, {borderColor: '#fff'}]}>
                      <Text style={{color: '#fff'}}>Goto next step</Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
              {step === '2' && (
                <>
                 <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        setStep('1');
                      }}>
                      <Image
                        source={require('../assets/back.png')}
                        style={{
                          height: 25,
                          width: 15,
                          resizeMode: 'contain',
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: '#fff',
                      }}>{`STEP : ${step}/2`}</Text>
                  </View>
                  <View/>
                  <View style={[styles.textInput,{position:'relative'}]}>
              <TextInput
                style={styles.placeholder}
                value={
                  !dob ? 'Date of birth' : Moment(date).format('DD MMM YYYY')
                }
                editable={false}
              />
              <View style={{ width: 20,
    height: 20,
    position: 'absolute',
    top: 15,
    right: 20,}}>
                <TouchableOpacity onPress={showDatePicker}>
                  <Image
                    source={require('../assets/calendar-outline-white.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
            </View>
            <View style={{marginTop: 10}} />

<View style={styles.textInput}>
  <TextInput
    placeholder="Address"
    placeholderTextColor={color.colorWhite}
    style={styles.placeholder}
    onChangeText={address => setAddress(address)}
    value={address}
    ref={addressRef}
    blurOnSubmit={false}
    returnKeyType="next"
    underlineColorAndroid="transparent"
    maxLength={10}
    //underlineColorAndroid='transparent'                maxLength={20}
  />
  </View>
  <View style={{marginTop: 10}} />

<View style={styles.textInput}>
  <TextInput
    placeholder="Zip code"
    placeholderTextColor={color.colorWhite}
    style={styles.placeholder}
    onChangeText={postal => setPostal(postal)}
    value={postal}
    ref={postalRef}
    blurOnSubmit={false}
    returnKeyType="next"
    underlineColorAndroid="transparent"
    keyboardType="number-pad"
    maxLength={6}
    //underlineColorAndroid='transparent'                maxLength={20}
  />
  </View>
                  <View style={{marginTop: 10}}>
                    <View style={styles.textInput}>
                      <TextInput
                        placeholder="Password"
                        placeholderTextColor={color.colorWhite}
                        style={styles.placeholder}
                        onChangeText={password => {
                          // setPassword(password);
                          handleValidPassword(password);
                        }}
                        value={password}
                        ref={passwordRef}
                        // onSubmitEditing={()=>usernameRef.current.focus()}
                        blurOnSubmit={false}
                        secureTextEntry={securePassword}
                        returnKeyType="done"
                        underlineColorAndroid="transparent"
                        maxLength={12}
                      />

                      {securePassword ? (
                        <TouchableOpacity
                          activeOpacity={0.6}
                          style={{
                            position: 'absolute',
                            end: 2,
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          onPress={() => setSecurePassword(!securePassword)}>
                          <FastImage
                            resizeMode={FastImage.resizeMode.contain}
                            source={
                              securePassword == true
                                ? require('../assets/eye_off.png')
                                : require('../assets/eyes_on.png')
                            }
                            style={styles.eye}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          activeOpacity={0.6}
                          style={{
                            position: 'absolute',
                            end: 2,
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          onPress={() => setSecurePassword(!securePassword)}>
                          <FastImage
                            resizeMode={FastImage.resizeMode.contain}
                            source={
                              securePassword == true
                                ? require('../assets/eye_off.png')
                                : require('../assets/eyes_on.png')
                            }
                            style={styles.eye}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                    <>
                      {validPassword ? (
                        <Text style={styles.errorcode}>{validPassword}</Text>
                      ) : null}
                    </>
                  </View>
                
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',

                      marginTop: 25,
                      marginBottom: 10,
                    }}
                    onPress={() => onSubmitData()}>
                    <View style={[styles.button, {borderColor: '#fff'}]}>
                      <Text style={[styles.formText, {color: '#fff'}]}>
                        Submit
                      </Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
          <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
              }}>
                <Text style={[styles.formText]}>
                Already registered ?{' '}
                <Text
                  style={{color:color.chocolate }}
                  onPress={() => navigation.navigate('SignIn')}>
                  SignIn
                </Text>
              </Text>
            </View>
        </KeyboardAwareScrollView>
        {/* </LinearGradient> */}
      </View>
    </SafeAreaView>
  );
};
// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#C11672f0',
//   },

//   inputTextView: {
//     height: 50,
//     backgroundColor: 'transparent',
//     paddingLeft: 5,
//     borderStyle: 'solid',
//     borderWidth: 1.5,
//     borderRightColor: 'transparent',
//     borderLeftColor: 'transparent',
//     borderTopColor: 'transparent',
//   },
// });

export default SignUp;
