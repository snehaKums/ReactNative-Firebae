import React, { Component } from 'react';
import {createAppContainer,SwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/Login';
import SignUp from './src/SignUp';
import Dashboard from './src/Dashboard';
import Loading from './src/Loading';

const App = createStackNavigator(
    {
      Loading,
      SignUp,
      Login,
      Dashboard
    },
    {
      initialRouteName: 'Loading',
    
    }

)
    
export default createAppContainer(App);
