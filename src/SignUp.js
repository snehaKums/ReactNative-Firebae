import React from "react";
import { Text, View,TextInput,TouchableOpacity,CheckBox } from 'react-native'
import firebase from 'firebase'
import styles from './styles';

export default class SignUp extends React.Component {

  static navigationOptions = ({navigation}) =>{
    return{
      title: 'Sign Up',
      headerStyle: {height: 67 , backgroundColor:'#1569C7', borderBottomWidth:1},
      headerLeft: null,
      headerTitleStyle: {
        fontSize:20, color:'white'
      }
    }

  }
  state = { email: '', password: '',conPassword: '',isSelected:false, errorMessage: null }

  handleSignUp = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate('Dashboard'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
 render(){
    return (
      <View style={styles.container}>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <Text style={styles.text1}>Create Username and Password</Text>
        <Text style={styles.text2}> Enter a valid email and Password must be min 6 digits.</Text>
        <Text style={styles.placeholderStyle}>Email (Username) </Text>
        <TextInput 
        style={styles.textInput}
        onChangeText={email => this.setState({ email })}
        value={this.state.email}
        />
        <Text style={styles.placeholderStyle}>Password</Text>
        <TextInput 
        style={styles.textInput}
        onChangeText={password => this.setState({ password })}
        value={this.state.password}
        /> 
        <Text style={styles.placeholderStyle}>Confirm Password </Text>
        <TextInput 
        style={styles.textInput}
        onChangeText={conPassword => this.setState({ conPassword })}
        value={this.state.conPassword}
        />
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={this.state.isSelected}
          onValueChange={isSelected => this.setState({isSelected})}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Yes, I agree all the Terms and Conditions</Text>
      </View>
        <TouchableOpacity style={styles.buttonStyle}  onPress={this.handleSignUp}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2Style}
         onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.button2Text}>Already have an account? Login</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

