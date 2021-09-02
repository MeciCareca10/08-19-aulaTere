import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

//const obj1 = {backgroundColor:"red", marginTop:10};

const linkitem = (props:any)=>{
    return(
        <Text style={{backgroundColor:"red", marginTop:10}}>{props.name}</Text>
    );
};
//{backgroundColor:"red", marginTop:10}
const linksimportantes = ()=>{
    return(
         <View>
            <Text>Home</Text>
            <Text>Post</Text>
            <Text>Videos</Text>
            <Text>Photos</Text>
            <Text>Community</Text>
            <linkitem name="Home"/>
            <linkitem name="Post"/>
            <linkitem name="Videos"/>
            <linkitem name="Photos"/>
            <linkitem name="Community"/>
        </View>
    );
};


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