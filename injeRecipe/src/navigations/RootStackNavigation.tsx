import React from "react"
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "../@types/screen"
import { HomeScreen } from "../screens/home/HomeScreen"
import BottomNavigator from "./BottomNavigator"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"

const Stack = createNativeStackNavigator<RootStackParamList>()
export default function RootStackScreen () {
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown:false
            }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Bottom" component={BottomNavigator}/>
        </Stack.Navigator>
    )
}

export const useRootNavigation = <RouteName extends keyof RootStackParamList> () => {
     return useNavigation<NativeStackNavigationProp<RootStackParamList,RouteName>>()
}