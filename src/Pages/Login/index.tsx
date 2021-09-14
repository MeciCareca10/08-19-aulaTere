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
            
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#4369B0",
    },
    facebook:{

    },
    img:{

    },
    face:{

    },
});

export default Login;