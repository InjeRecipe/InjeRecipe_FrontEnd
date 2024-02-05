import React from "react"
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/home/HomeScreen"
import BottomNavigator from "./BottomNavigator"
import HomeStackNavigator from "./HomeNavigator"

const Stack = createNativeStackNavigator()
export default function RootStackNavigation () {
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown:false
            }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="HomeStack" component={HomeStackNavigator}/>
            <Stack.Screen name="Bottom" component={BottomNavigator}/>
        </Stack.Navigator>
    )
}

