import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Colors } from "../../color/Colors";
import { useNavigation } from "@react-navigation/core";
import { chatGptService } from "../../services/chatGptService";
import { recipeService } from "../../services/recipeService";


export function RefrigatorAiButton({postData}:any){
    console.log('button',postData)
    const navigation = useNavigation<any>();  
    const {GET_REFIGATOR_RECOMMEND} = chatGptService()
    const {GET_SERACH_RECIPE} = recipeService()
    const [text,setText] = useState('')  
    const onPressRecommendButton = () => {
        GET_REFIGATOR_RECOMMEND(postData).then((res:string)=>{
                setText(res)
                console.log(res)    
                    const postRecipeData = {
                        keyword1:res
                    }      
                    GET_SERACH_RECIPE(postRecipeData).then((item)=>{
                        console.log(item)
                        navigation.navigate('RefrigatorStack',{screen:'AiRecommend',params:{item:item.data}})
                    })
            }) 
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