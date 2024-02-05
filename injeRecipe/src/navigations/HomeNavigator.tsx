import React from "react"
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"
import { SignInScreen } from "../screens/home/signin/SignInScreen"
import { SignUpScreen } from "../screens/home/signUp/SignUpScreen"


const Stack = createNativeStackNavigator()
export default function HomeStackNavigator () {
    return(
        <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
                headerShown:false
            }}>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
        </Stack.Navigator>
    )
}
