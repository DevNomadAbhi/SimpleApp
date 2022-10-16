import AsyncStorage from '@react-native-async-storage/async-storage';
export const saveDataOfUser = async userData => {


    try {
      await AsyncStorage.setItem('UserData', JSON.stringify(userData))
    } catch (e) {
      //console.log(e)
      // saving error
    }
  }
  export const getDataOfUser = async () => {
    try {
      const userData = await AsyncStorage.getItem('UserData')
      if (userData !== null) {
        //   printLog(userData)
        return JSON.parse(userData)
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  }

  export const Logout = async () => {
    try {
      const logoutUser = await AsyncStorage.clear()
    } catch (e) {
    }
  }