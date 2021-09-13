import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';

import routes from './src/routes'

export default function App() {
    return (
       <View style={styles.container}>
           <routes/>
        </View> 
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});