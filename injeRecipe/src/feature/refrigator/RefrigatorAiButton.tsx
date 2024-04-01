import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Colors } from "../../color/Colors";
import { useNavigation } from "@react-navigation/core";
import { chatGptService } from "../../services/chatGptService";
import { recipeService } from "../../services/recipeService";
import { useSelector } from "react-redux";
import { RootReducerState } from "../../redux/store";


export function RefrigatorAiButton({postData}:any){
    console.log('button',postData)
    const navigation = useNavigation<any>();  
    const {GET_REFIGATOR_RECOMMEND} = chatGptService()
    const {GET_SERACH_RECIPE,POST_IMAGE_SEARCH} = recipeService()
    const [text,setText] = useState('')
      
    const token = useSelector((state:RootReducerState)=> state.login.userToken)
    const onPressRecommendButton = () => {
        console.log(token)
        GET_REFIGATOR_RECOMMEND({
            data:postData,
            token:token}).then((res:string)=>{
                setText(res)
                console.log("@@@@",res,"@@@")    
                    const postRecipeData = {
                        keywords:[res.replace(/ /g, '')]
                    }     
                    
                    console.log(postRecipeData) 
                    GET_SERACH_RECIPE({
                        data:postRecipeData,
                        token:token}).then((item:any)=>{
                            
                            if(item.data[0].recipe_eng == null){
                                
                                const isNull = true
                                navigation.navigate('RefrigatorStack',{screen:'AiRecommend',params:{item:item.data,isNull:isNull,isArray:true}})
                            }else{
                                const isNull = false
                                navigation.navigate('RefrigatorStack',{screen:'AiRecommend',params:{item:item.data,isNull:isNull,isArray:true}})
                            }
                        
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