import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

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
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#4369B0",
    },
    facebook:{
        position: 'absolute',
        marginTop: 170,
    },
    img:{    
        marginLeft: 30,
        width: 50,
        height: 50,
        position: 'absolute',
    },
    face:{
        color: "#FFFFFF",
        marginLeft: 98,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "900",
        fontSize: 42.11,
        lineHeight: 49,
        position: 'absolute',
        width: 218.42,
        height: 50,
        marginRight: 97.58,
        letterSpacing: 0.03,
    },
    textInput:{
        color:"#FFFFFF",
        width: 320,
        height: 42,
        marginLeft: 18,
        backgroundColor: "#FFFFFF",
        marginTop: 300,
        marginRight: 18,
        position: 'absolute',
    },
    textInputt:{
        color:"#FFFFFF",
        width: 320,
        height: 42,
        marginLeft: 18,
        backgroundColor: "#FFFFFF",
        marginRight: 18,
        position: 'absolute',
        marginTop: 370,
    },
    Login:{
        backgroundColor:"#213873",
        width: 320,
        height: 42,
        marginLeft: 18,
        textAlign: 'center',
        marginTop: 440,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "bold",
        fontSize: 25,
    },
    upfor:{
        marginTop: 670,
        color: "#FFFFFF",
        marginLeft: 105,
        width: 163,
        height: 19,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "normal",
        position: 'absolute',
        fontSize: 16,
    },
});

export default Login;