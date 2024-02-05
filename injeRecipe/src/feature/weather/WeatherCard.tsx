import React, { useEffect } from "react";
import { Dimensions, Text, View } from "react-native";
import { useLocation } from "../../hooks/useLocation";
import LottieView from "lottie-react-native";

const hegiht = Dimensions.get('window').height
export function WeatherCard(){
    const {getNowLocation} = useLocation()
    useEffect(()=>{
        getNowLocation()
    },[])
    return(
        <View style={{height:hegiht*0.25,borderWidth:1}}>
            <LottieView 
            style={{height:150}}
         autoPlay
         loop
         source={require('/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/lottie/testsun.json')}
         />
            <Text style={{alignSelf:"center"}}>
                맑은 날씨엔 다음과 같은 음식을 추천합니다.
            </Text>
        </View>
        
    )
}