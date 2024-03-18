import React, { useState } from "react";
import {ScrollView, Text, View } from "react-native";
import { useDimention } from "../../hooks/useDimension";

import { RecipeInfoView } from "../../screens/recipe/RecipeInfoView";
import { useRoute } from "@react-navigation/core";
import {  RecipebodyView } from "./RecipeBody";
import { Colors } from "../../color/Colors";
export const RecipeView = () => {
    // 전역으로 설정된 레시피 데이터 받아오기 필요 렌더링될때 항상 해당 데이터로 받아오기
    const {
        getHeight,
        getWeight
    } = useDimention()
    const route = useRoute();
    const  recipeData  = route.params;
    console.log('@@@@@@@@@@@@@@@@',recipeData)
    
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                bounces={false}
                style={{ flex: 1, borderBottomWidth: 1,borderColor:Colors.SEPARATED_LINE }}>
                <View style={{ height: getHeight() * 1, borderWidth: 1 }}>
                    <RecipeInfoView recipeData={recipeData}/>
                </View>
                <View style={{width:'100%' }}>
                    <RecipebodyView recipeData={recipeData}/>
                </View>
            </ScrollView>
        </View>
    )
}