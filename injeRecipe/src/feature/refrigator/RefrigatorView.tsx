import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { RefrigatorHeader } from "./RefrigatorHeader";
import { RefrigatorAiButton } from "./RefrigatorAiButton";
import { RefrigatorItemView } from "./RefrigatorItemView";

export function RefrigatorView(){
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:0.06}}>
                <RefrigatorHeader/>    
            </View>
            <View style={{flex:0.94}}>
                <View style={{borderWidth:1,flex:0.85}}>
                    {/* item view */}
                    <RefrigatorItemView/>
                </View>
                <View style={{flex:0.15}}>
                    {/* button view */}
                    <RefrigatorAiButton/>
                </View>
                
            </View>
            
        </SafeAreaView>
    )
}