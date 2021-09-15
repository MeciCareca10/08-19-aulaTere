import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, StyleSheet, Routes } from 'react-native';

import  Routes from '../08-19-aulaTere/src/Routes'

export default function App() {
    return (
       <View style={styles.container}>
           <Routes/>
        </View> 
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});