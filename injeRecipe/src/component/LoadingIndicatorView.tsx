import LottieView from "lottie-react-native"
import React from "react"
import { Text, View } from "react-native"
import { useDimention } from "../hooks/useDimension"
import { Colors } from "../color/Colors"

export const LoadingIndicaotrView = ({text}:any) =>{
    const {getHeight,getWeight} = useDimention()
    return (
        <View style={{
            width:getWeight(),
            height:getHeight()*0.84,
        position:"absolute",}}>
            <LottieView
            style={{borderWidth:1,width:getWeight()*1,height:getHeight()*1,backgroundColor:'#00000040'}}
        source={require('/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/lottie/LottieSpeener.json')} // 로티 애니메이션 JSON 파일 경로
        autoPlay
        loop
        />
        <Text style={{

            position:"absolute",
            top:500,
            color:Colors.FONT_WHITE,
            left:getWeight()*0.35,
            fontSize:22
    }}>{text}</Text>
        </View>
    )
}