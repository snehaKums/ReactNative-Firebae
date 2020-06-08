import React,{Component} from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
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
  static navigationOptions = ({navigation}) => {
    return{
      header: null
   }
  }
  constructor(props)
{
  super(props);
  this.state = ({
    name : '',
    email : '',
    password : ''
  })
}

loginIn = () => {
  const { email, password,name } = this.state
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => this.props.navigation.navigate('Dashboard',{name:this.state.name}),
    alert('Login Successful'))
    .catch(error => this.setState({ errorMessage: error.message }))
}
render(){
    return(
      <View style={styles.container}>
        
        <Text style={styles.header}>Welcome !!!</Text>
        <Text style={styles.subHeader}> Login to continue</Text>
        <Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        </Text>
        <Text style={styles.placeholderStyle}>Enter Name(Optional)</Text>
        <TextInput 
        style={styles.textInput}
        onChangeText={name => this.setState({ name })}
        value={this.state.name}
        />

        <Text style={styles.placeholderStyle}>Email</Text>
        <TextInput 
        style={styles.textInput}
        onChangeText={email => this.setState({ email })}
        value={this.state.email}
        />

        <Text style={styles.placeholderStyle}>Password</Text>
        <TextInput 
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={password => this.setState({ password })}
        value={this.state.password}
        />

        <TouchableOpacity style={styles.buttonStyle}  
            onPress = {() => this.loginIn(this.state.name,this.state.email,this.state.password)}>
          <Text style={styles.buttonText}>Login In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}  
            onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


