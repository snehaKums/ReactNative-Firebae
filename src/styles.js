import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
      },
      header:{
          color:'#1569C7',
          fontSize:40,
          marginTop:'10%',
          marginLeft:'25%'
      },
      subHeader:{
          fontSize:30,
          color:'gray',
          marginBottom:'5%',
          marginLeft:'20%'
      },
      text1:{
          color:'black',
          fontWeight:'bold',
          fontSize:20,
          marginLeft:'5%',
          marginTop:'2%'
      },
      text2:{
          color:'gray',
          fontSize:15,
          marginLeft:'5%',
          marginBottom:'3%'
        },
      placeholderStyle:{
            color:'gray',
            marginLeft:'5%'
      },
      titleStyle:{
          fontSize:30,
          color:'gray',
          marginRight:'5%',
          marginBottom:'5%'
      },
      textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        marginLeft:'5%'
      },
      checkboxContainer: {
        flexDirection: "row",
        margin:'2%'
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      },
      buttonStyle:{
          backgroundColor:'#1569C7',
          margin:'5%',
          width:'30%',
          height:'5%',
          borderRadius:15
      },
      buttonText:{
          color:'white',
          marginTop:'5%',
          marginLeft:'30%'
        },
        button2Style:{
            backgroundColor:'#1569C7',
            margin:'5%',
            width:'70%',
            height:'5%',
            borderRadius:15
        },
        button2Text:{
            color:'white',
            marginTop:'2%',
            marginLeft:'10%'
          },
})

export default styles;
