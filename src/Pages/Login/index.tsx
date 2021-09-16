import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

import {styles} from './styles'

const Login = () => {
    return(
        <View style={styles.container}>
            <View style={styles.facebook}>
            <Image style={styles.img} source={
                    require("../../assets/faceb.png")
                    }>
                </Image>
            <Text style={styles.face}>Facebook</Text>
            </View>
            <View>
            <TextInput
                placeholder="Email"
                placeholderTextColor="#A19FA1"
                style={styles.textInput}
                >
            </TextInput>
            <TextInput
                placeholder="Senha"
                placeholderTextColor="#A19FA1"
                style={styles.textInputt}
                >
            </TextInput>      
            </View>
            <TextInput
                placeholder="Log In"
                placeholderTextColor="#FFFFFF"
                style={styles.Login}
                >
            </TextInput>    
            <Text style={styles.upfor}>Sign Up for FaceBook</Text>        
        </View>
    );
}
export default Login;