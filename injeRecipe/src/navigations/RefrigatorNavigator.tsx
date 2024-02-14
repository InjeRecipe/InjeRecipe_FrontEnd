import React from "react"
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"
import { RefrigatorScreen } from "../screens/refrigator/RefrigatorScreen"
import { AiRecommendScreen } from "../screens/refrigator/AiRecommendScreen"


const Stack = createNativeStackNavigator()
export default function RefrigatorNavigator () {
    return(
        <Stack.Navigator
            initialRouteName="AiRecommend"
            screenOptions={{
                headerShown:false
            }}>
            <Stack.Screen name="AiRecommend" component={AiRecommendScreen}/>
        </Stack.Navigator>
    )
}
