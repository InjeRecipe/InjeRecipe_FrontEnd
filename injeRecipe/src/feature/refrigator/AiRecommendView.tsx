import React from "react";
import { Text, View } from "react-native";
import { RefrigatorHeader } from "./RefrigatorHeader";

export function AiRecommendView(){
    return(
        <View style={{flex:1,}}>
            <View style={{flex:0.06}}>
                <RefrigatorHeader left={true} right={false}/>    
            </View>
            <View style={{flex:0.94}}>
                <View style={{borderWidth:1,flex:0.85}}>
                    {/* item view */}
                   
                </View>
                <View style={{flex:0.15}}>
                    {/* button view */}
                   
                </View>
                
            </View>
        </View>
    )
}