import React ,{useState,useRef} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    ToastAndroid,
  } from 'react-native';
  import {useNavigation} from '@react-navigation/native';
  import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
  import {saveDataOfUser} from '../database/UserData';
  import FastImage from 'react-native-fast-image';
  import {styles} from '../styles/styledComponent';
  import {color} from '../styles/color';


const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [securePassword, setSecurePassword] = useState(true);
    const [emailValidError, setEmailValidError] = useState('');
    const [validPassword, setValidPassword] = useState(0);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
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
  
    const onSubmitData =  () => {
      if (!email) {
        ToastAndroid.showWithGravity('Enter email',ToastAndroid.SHORT,ToastAndroid.BOTTOM,0,200);
      } else if (!password) {
        ToastAndroid.showWithGravity('Enter your password',ToastAndroid.SHORT,ToastAndroid.BOTTOM,0,200);
      }
      else navigation.navigate('Home')
    //   try {
    //     const response = await axios.post(LOGIN, {
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
  
    return (
      <SafeAreaView style={styles.mainComponent}>
        <ImageBackground
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 2,
          }}
          source={require('../assets/cadbury-world.jpg')}>
          <View style={{flex: 1}} />
  
          <View
            style={{
              flex: 1,
              backgroundColor: '#E8E7EE',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              overlay: 'hidden',
            }}>
            <View
              style={{
                height: 5,
                width: 60,
                borderRadius: 10,
                backgroundColor: '#5aa',
                alignSelf: 'center',
                marginTop: 5,
              }}
            />
            <KeyboardAwareScrollView bounces={false}>
              <View style={{marginStart: 20, marginEnd: 20}}>
                <Text
                  style={{
                    marginTop: 20,
                  }}>
                  Welcome !!
                </Text>
  
                <View style={{marginTop: 15}}>
                <View style={[styles.textInput, {borderColor: color.cadbury}]}>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor={color.cadbury}
                      style={[styles.placeholder, {color: color.cadbury}]}
                      onChangeText={email => {
                        // setEmail(email)
                        handleValidEmail(email);
                      }}
                      value={email}
                      ref={emailRef}
                      onSubmitEditing={() => passwordRef.current.focus()}
                      blurOnSubmit={false}
                      returnKeyType="next"
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
                  <>
                    {emailValidError ? (
                      <Text style={[styles.errorcode, {color: color.cadbury}]}>
                        {emailValidError}
                      </Text>
                    ) : null}
                  </>
                </View>
                <View style={{marginTop: 5}}>
                  <View style={[styles.textInput, {borderColor: color.cadbury}]}>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor={color.cadbury}
                      style={[styles.placeholder, {color: color.cadbury}]}
                      onChangeText={password => {
                        // setPassword(password);
                        handleValidPassword(password);
                      }}
                      value={password}
                      ref={passwordRef}
                      onSubmitEditing={() => null}
                      blurOnSubmit={false}
                      returnKeyType="done"
                      secureTextEntry={securePassword}
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
                      <Text style={[styles.errorcode, {color: color.cadbury}]}>
                        {validPassword}{' '}
                      </Text>
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
                  <View style={[styles.button, {borderColor: color.cadbury}]}>
                    <Text style={[styles.formText, {color: color.cadbury}]}>
                      Submit
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
              }}>
                <Text style={[styles.formText, {color: color.cadbury}]}>
                Not a registered user?{' '}
                <Text
                  style={{color:color.chocolate }}
                  onPress={() => navigation.navigate('SignUp')}>
                  SignUp
                </Text>
              </Text>
            </View>
  
              </View>
            </KeyboardAwareScrollView>
            {/* </LinearGradient> */}
          </View>
        </ImageBackground>
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
  
  export default LogIn;
  