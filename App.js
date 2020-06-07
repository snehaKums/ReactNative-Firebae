import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator,HeaderBackButton} from 'react-navigation-stack';
import Login from './src/Login';
import Dashboard from './src/Dashboard';

const App = createStackNavigator({
    Login: {
      screen:Login,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Dashboard:{
        screen:Dashboard,
        navigationOptions: ({ navigation }) => ({
          header: null
        })
    }
})
    
export default createAppContainer(App);