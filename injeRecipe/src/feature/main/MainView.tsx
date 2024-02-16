import React, { useEffect } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { WeatherCard } from "./weather/WeatherCard";
import { Header } from "../../component/Header";
import { Margin } from "../../component/Margin";
import { Colors } from "../../color/Colors";
import { useDimention } from "../../hooks/useDimension";
import { MainHeaderAnim } from "./MainHeaderAnim";
import { useSelector } from "react-redux";
import { RootReducerState } from "../../redux/store";

export function MainView() {
   
   

    const ViewOriginal = () => {
        return(
            <>
             <View style={{ flex: 0.1 }}>
                {/* Header */}
                <Header />
            </View>
            <ScrollView style={{ flex: 0.9, }}>
                <View style={{ flex: 0.5, borderColor: 'blue' }}>
                    {/* recomend Ai Recipe */}
                    <View style={{ flex: 0.1, paddingHorizontal: 10 }}>
                        <Text style={{ marginTop: 5, fontWeight: 'bold', fontSize: 20 }}>추천 레시피</Text>
                    </View>
                    <View style={{ flex: 0.9 }}>
                        <WeatherCard height={10} />
                    </View>
                </View>
                <View style={{ flex: 0.45, borderWidth: 1 }}>
                    {/* popular recipe */}
                    <View style={{ flex: 0.1, paddingHorizontal: 10 }}>
                        <Text style={{ marginTop: 5, fontWeight: 'bold', fontSize: 20 }}>인기 레시피</Text>
                    </View>
                    <View style={{ flex: 0.9 }}>

                    </View>
                </View>
            </ScrollView></>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white',borderWidth:1 }}>
            <View style={{
                height:50,
                borderWidth:1
            }}>
            </View>
            <View style={{
                flex:0.05,
                borderWidth:1,
                alignItems:"center",
            justifyContent:'center'}}>
                <Text style={{fontSize:22,fontWeight:'bold'}}>인제 레시피</Text>
            </View>
            <ScrollView style={{flex:0.95,borderWidth:1,borderColor:'red'}} bounces={false}>
                <MainHeaderAnim/>
                <View style={{height:800}}>

                </View>
            </ScrollView>
           

        </View>
    )
}