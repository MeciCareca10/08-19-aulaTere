import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles'
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../../types';

type HomeProps = NativeStackNavigationProp<StackNavigatorParamList,"Login">;

const Login = () => {
    const navigation = useNavigation<HomeProps>();

    function irparatelahome(){
        navigation.navigate('Home');
    }
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
            <View>
                <TouchableOpacity style={styles.meubotao} onPress={irparatelahome}>
                    <Text style={styles.meubotaoTexto}>Log In</Text>
                </TouchableOpacity>   
            <Text style={styles.upfor}>Sign Up for FaceBook</Text>      
        </View>
        </View>
    );
}
export default Login;
