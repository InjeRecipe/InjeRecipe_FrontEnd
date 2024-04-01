import React, { useEffect, useState } from "react";
import {Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useDimention } from "../../hooks/useDimension";
import { useNavigation } from "@react-navigation/core";
import { RecipeInfoView } from "./RecipeInfoView";
import { useRoute } from "@react-navigation/core";
import {  RecipebodyView } from "./RecipeBody";
import { Colors } from "../../color/Colors";
import { NullRecipeBody } from "./NullRecipeBody";
import  Icon  from "react-native-vector-icons/Ionicons";
export const RecipeView = ({}:any) => {
    // 전역으로 설정된 레시피 데이터 받아오기 필요 렌더링될때 항상 해당 데이터로 받아오기
    const {
        getHeight,
        getWeight
    } = useDimention()
    const route = useRoute();
    const navigation = useNavigation<any>();
    const  [recipeData]  = useState<any>(route.params);
    const [isNull,setIsNull] = useState(recipeData.item.recipe_file_s==null?true:false)
    useEffect(()=>{
        setIsNull(recipeData.item.recipe_file_s==null?true:false)
    },[route])
    console.log(
        "RecipeView"
    )
    const onPressBackArrow = () => {
        navigation.pop()
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, borderBottomWidth: 1,borderColor:Colors.SEPARATED_LINE }}>
                     <View style={{flex:0.28,
                
                paddingHorizontal:20,
                flexDirection:"column",
                width:'100%'
                }}>
                    <SafeAreaView>
                    <View style={{flex:0.8}}/>
                    <Pressable onPress={onPressBackArrow}>
                    <Icon name='chevron-back' size={26} color={Colors.SEPARATED_LINE_TORNUP}></Icon>
                    </Pressable>
                    </SafeAreaView>
                </View>
                
                {isNull?
                    <NullRecipeBody recipeData={recipeData}/>:
                    <>
                    <View style={{ height: getHeight() * 1,  }}>
                        <RecipeInfoView recipeData={recipeData} isNull={isNull}/>
                    </View>
                    <View style={{width:'100%' }}>
                        <RecipebodyView recipeData={recipeData} isNull={isNull}/>
                    </View>
                    </>
                }
              
            </ScrollView>
        </View>
    )
}