import React from "react";
import { Pressable, Text, View } from "react-native";
import { Colors } from "../../color/Colors";
import { useNavigation } from "@react-navigation/core";


export function RefrigatorAiButton(){
    const navigation = useNavigation<any>();    
    const onPressRecommendButton = () => {
        navigation.navigate('RefrigatorStack',{screen:'AiRecommend'})
        
    }
    return(
        <View style={{flex:1,justifyContent:"center"}}>
            <Pressable style={{
                width:"55%",
                height:'65%',
                alignSelf:"center",
                alignItems:"center",
                borderRadius:30,
                justifyContent:"center",
                backgroundColor:Colors.REFRIGATOR_AI_BUTTON
            }}
            onPress={onPressRecommendButton}>
                <Text style={{color:Colors.FONT_WHITE,fontSize:20}}>추천받기</Text>
            </Pressable>
        </View>
    )
}