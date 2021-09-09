import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Pages/Home';
import login from './Pages/Login';

const Stack = createNativeStackNavigator();

const routes =() =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={login}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default routes;
