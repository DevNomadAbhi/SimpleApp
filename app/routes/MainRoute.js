import React from 'react';
import {
  NavigationContainer,
  CommonActions,
  useNavigation,
} from '@react-navigation/native';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import SignUp from '../screens/SignUp';
import LogIn from '../screens/SignIn';
import Home from './home';
import HomeScreen from '../screens/HomeScreen';






const Stack = createStackNavigator();

const options={headerShown:false}

const MainRoute=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn' >

                <Stack.Screen
        name ='SignIn'
        component={LogIn }
        options={options}
        />
                <Stack.Screen
        name ='SignUp'
        component={SignUp}
        options={options}
        />
                <Stack.Screen name="Home" component={Home} options={options} />
                {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={options} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
  
}


export default MainRoute;