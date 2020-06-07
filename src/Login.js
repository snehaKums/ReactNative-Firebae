import React,{Component} from 'react';
import {View,Text,} from 'react-native';
import {Button,Input} from 'react-native-elements'; 
import firebase from 'firebase';
import styles from './styles';

const firebaseConfig = {
  apiKey: "AIzaSyDhQNGL8823UPpKWCk1jUyqekthkS8rVg0",
  authDomain: "newproj-93dfe.firebaseapp.com",
  databaseURL: "https://newproj-93dfe.firebaseio.com",
  projectId: "newproj-93dfe",
  storageBucket: "newproj-93dfe.appspot.com",
  messagingSenderId: "397006982875",
  appId: "1:397006982875:web:0599157e6f3221adb506fe",
  measurementId: "G-YPWGLT6XV2"
};
firebase.initializeApp(firebaseConfig);

export default class Login extends Component{
  constructor(props)
{
  super(props);
  this.state = ({
    name : '',
    email : '',
    password : ''
  })
}
loginIn = (email,password,name) => {
  try 
  {
    firebase.auth().createUserWithEmailAndPassword(email,password,name)
  }
  catch(error)
  {
    console.log(error.toString())
  }
  alert('Login Successful')
  this.props.navigation.navigate('Dashboard',{name:this.state.name})
}
render(){
    return(
      <View style={styles.container}>
        
        <Text style={styles.header}>Welcome !!!</Text>
        <Text style={styles.subHeader}> Login to continue</Text>
        <Input 
        placeholder= "Enter Name"
        onChangeText = {(name) => this.setState({name})}
        />
        <Input 
        placeholder = " Enter Email"
        onChangeText = {(email) => this.setState({email})}
        />
         <Input 
        placeholder = "Password"
        onChangeText = {(password) => this.setState({password})}
        />

        <View>
          <Button 
          title=" Login In"
          onPress = {() => this.loginIn(this.state.name,this.state.email,this.state.password)}
          />
        </View>
      </View>
    )
  }
}


