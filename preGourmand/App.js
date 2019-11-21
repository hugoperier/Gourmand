/**
 * App Main File
 * 
 *  1. We can change navigators.
 * 
 *  2. There are navigators of maps, Login & register, Kakao Map...
 * 
 *  3. 
 */

import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/Normal_Screens/Home';
import Maps from './src/Normal_Screens/Maps';
import Details from './src/Normal_Screens/Details';
import Writing_Review from './src/Normal_Screens/Writing_Review'

import Login from './src/Authorization_Screens/Login';
import Register from './src/Authorization_Screens/Register';
import AuthLoading from './src/Authorization_Screens/AuthLoading';

// Map and detail information Screen for restaurants and caffes.
const AppStack = createStackNavigator(
  {
    Home : Home,       // left side Home is customized name for screen, and right side is real class name.
    Maps : Maps,
    Details : Details,
    Writing_Review : Writing_Review,
  },
  {
    initialRouteName: 'Home'
  }
);

const AuthStack = createSwitchNavigator(
  {
    Login : Login,
    Register : Register
  },
  {
    initialRouteName : 'Login'
  }
);

// To switch the Navigators like AppStack and Autorization_Navigator, Loading_Navigator
const AppNavigator = createSwitchNavigator(
  {
    AuthLoading : AuthLoading,
    AppStack : AppStack,
    AuthStack : AuthStack
  },
  {
    initialRouteName : 'AppStack'
  }
);

export default createAppContainer(AppNavigator);
