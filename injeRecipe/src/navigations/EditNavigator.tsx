import React from "react"
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"
import { RefrigatorScreen } from "../screens/refrigator/RefrigatorScreen"
import { AiRecommendScreen } from "../screens/refrigator/AiRecommendScreen"
import { RecipeView } from "../feature/recipe/RecipeView"
import { EditScreen } from "../screens/edit/EditScreen"
import { EditInfoScreen } from "../screens/edit/EditInfoScreen"


const Stack = createNativeStackNavigator()
export default function EditNavigator () {
    return(
        <Stack.Navigator
            initialRouteName="EditInfoView"
            screenOptions={{
                headerShown:false
            }}>
            <Stack.Screen name="EditView" component={EditScreen}/>
            <Stack.Screen name="EditInfoView" component={EditInfoScreen}/>
        </Stack.Navigator>
    )
}
