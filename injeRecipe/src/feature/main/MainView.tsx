import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { WeatherCard } from "./weather/WeatherCard";
import { Header } from "../../component/Header";
import { Margin } from "../../component/Margin";
import { Colors } from "../../color/Colors";
import { useDimention } from "../../hooks/useDimension";

export function MainView(){
    const {getHeight } = useDimention()
    const height = getHeight()
    
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}> 
            <View style={{flex:0.1}}>
                {/* Header */}
                <Header/>
            </View>
            <ScrollView style={{flex:1,}}>
            <View style={{flex:0.5,borderColor:'blue'}}>
                {/* recomend Ai Recipe */}
                <View style={{flex:0.1,paddingHorizontal:10}}>
                    <Text style={{marginTop:5,fontWeight:'bold',fontSize:20}}>추천 레시피</Text>
                </View>
                <View style={{flex:0.9}}>
                <WeatherCard height={height}/>
                </View>
            </View>
            <View style={{flex:0.45,borderWidth:1}}>
                {/* popular recipe */}
                <View style={{flex:0.1,paddingHorizontal:10}}>
                    <Text style={{marginTop:5,fontWeight:'bold',fontSize:20}}>인기 레시피</Text>
                </View>
                <View style={{flex:0.9}}>
                
                </View>
            </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}