import React,{Component} from 'react';
import {View,Text,} from 'react-native';
import {Button} from 'react-native-elements'; 
import { auth } from 'firebase';
import MapView from 'react-native-maps';
import styles from './styles';

export default class Dashboard extends Component{

    logout = () =>{
        auth().signOut()
        .then(this.props.navigation.navigate('Login'))
    }
    render(){
        const {navigation} = this.props;
        name = navigation.getParam('name', 'User');
        return(
            <View style={styles.container}>
                
                <View style={{flexDirection:'row'}}>
                <Text style={styles.titleStyle}>Hello {name}</Text>
                    <Button 
                    title=" Log Out"
                    onPress = {() => this.logout()}
                    />
                </View>
                <MapView
            style={{ height: "90%", width: "100%"}}
            showsUserLocation={false}
            zoomEnabled={true}
            zoomControlEnabled={true}
            initialRegion={{
                latitude: 28.579660,
                longitude: 77.321110,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
          }}>
        </MapView>
            </View>
        )
    }
}
