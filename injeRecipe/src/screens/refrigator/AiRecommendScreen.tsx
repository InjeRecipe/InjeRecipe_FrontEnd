import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { AiRecommendView } from "../../feature/refrigator/AiRecommendView";

export function AiRecommendScreen(){
    return(
        <SafeAreaView style={{flex:1}}>
            <AiRecommendView/>
        </SafeAreaView>
    )
}