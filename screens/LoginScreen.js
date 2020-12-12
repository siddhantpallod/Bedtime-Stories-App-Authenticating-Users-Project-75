import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,KeyboardAvoidingView,Alert } from 'react-native';
import db from '../config'; 
import firebase from 'firebase';
import {Header} from 'react-native-elements';

export default class LoginScreen extends React.Component{
    constructor(){
        super();

        this.state = {
        email : '',
        password : ''
    }
}

userLogin = (email,password) => {
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        this.props.navigation.navigate('WriteStory')
        
    })
    .catch((error)=> {
        var errorMessage = error.message
        return Alert.alert(errorMessage)
    })
    }

    render(){
        return(
            <View>
                <View>
                <Header
            containerStyle={{backgroundColor : 'pink'}}
            centerComponent={{
              text: "Bed Time Stories",
              style:{
                color: "black",
                fontSize: 24,
                fontWeight: '500',
              }}} />    
                </View>
                <KeyboardAvoidingView>
                <TextInput
                style = {styles.textInput}
                placeholder = "Email"
                keyboardType = 'email-address'
                onChangeText = {(text)=> {
                    this.setState({
                        email : text
                    })
                }}
                />

                <TextInput
                style = {styles.textInput} 
                secureTextEntry = {true}
                placeholder = "Password"
                onChangeText = {(text)=> {
                    this.setState({
                        password : text
                    })
                }}
                />

                <TouchableOpacity style = {styles.button} 
                onPress = {()=> {
                    this.userLogin(this.state.email,this.state.password)
                }}
                >
                    <Text style = {styles.buttonText}> Login </Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    buttonText : {
        color : 'black',
        textAlign : 'center',
        fontSize : 20
    },
    button : {
          backgroundColor : 'pink',
          width : 100,
          height : 50,
          borderWidth : 2,
          borderRadius : 11,
          alignSelf : 'center', 
          marginTop : 30
    },
    textInput : {
        width : 500,
        height : 50,
        borderWidth : 3,
        marginTop : 50,
        alignSelf : 'center'
    }
})