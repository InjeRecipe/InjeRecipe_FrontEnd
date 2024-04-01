import React from "react"
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/home/HomeScreen"
import BottomNavigator from "./BottomNavigator"
import HomeStackNavigator from "./HomeNavigator"
import RefrigatorNavigator from "./RefrigatorNavigator"
import { RecipeView } from "../feature/recipe/RecipeView"
import { EditScreen } from "../screens/edit/EditScreen"
import EditNavigator from "./EditNavigator"

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
            <Stack.Screen name="RefrigatorStack" component={RefrigatorNavigator}/>
            <Stack.Screen name="RecipeView" component={RecipeView}/>
            <Stack.Screen name="EditStack" component={EditNavigator}/>
            
        </Stack.Navigator>
    )
}

