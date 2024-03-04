import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { AiRecommendView } from "../../feature/refrigator/AiRecommendView";
import { RecipeView } from "../../feature/recipe/RecipeView";

export function RecipeScreen(){
    return(
        <View style={{flex:1}}>
            <RecipeView/>
        </View>
    )
}