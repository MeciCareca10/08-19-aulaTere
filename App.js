import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const LinkItem = (props:any)=>{
    return(
        <Text style={stylesLink.text}>{props.name}</Text>
    );
}

const stylesLink = StyleSheet.create({
    text:{
        //backgroundColor:"red",
        marginTop:10,
        color: '#4A4A4C',
        fontSize: 13.71,

    }
});

const LinksImportantes = ()=>{
    return(//Aqui dentro ficará o nosso JSX
        <View style={stylesLinkImportantes.container}>
            <LinkItem name="Home"/>
            <LinkItem name="Post"/>
            <LinkItem name="Videos"/>
            <LinkItem name="Photos"/>
            <LinkItem name="Community"/>
        </View>
    );
};
const stylesLinkImportantes = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal:40,
        paddingVertical:10,
        background: "#FFFFFF",
        
    }
});

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
            <Image source={
                require("./src/assets/arrow-left.png")
                }>
            </Image>
            <View style={styles.inputTextView}>
                <Image source={
                    require("./src/assets/ei_search.png")
                    }>
                </Image>
                <TextInput
                    style={styles.textInput}
                    placeholder="Search"
                    placeholderTextColor="#F5FFFF"
                    >
                </TextInput>
            </View>
            <Image source={
                require("./src/assets/share.png")
                }>
            </Image>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header:{
        minHeight:70,
        backgroundColor:"#4369B0",
        paddingVertical:30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:30,
        paddingTop:50,
    },
    inputTextView:{
        flex:1,
        borderRadius:28,
        backgroundColor:"#2C4877",
        marginHorizontal: 10,
        height:40,
        alignItems:"center",
        flexDirection:"row",
    },
    textInput:{
        flex:1,
        paddingRight:10,
        color:"#F5FFFF",
    },
});