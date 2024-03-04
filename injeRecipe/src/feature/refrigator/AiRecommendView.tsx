import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View ,ViewProps} from "react-native";
import { RefrigatorHeader } from "./RefrigatorHeader";
import BitSwiper from 'react-native-bit-swiper';
import { Colors } from "../../color/Colors";
import Swiper from 'react-native-swiper'
import { useDimention } from "../../hooks/useDimension";
import { useNavigation, useRoute } from "@react-navigation/core";
export function AiRecommendView() {
    const {getWeight} = useDimention()
    const navigation =useNavigation<any>()
    const data = ['', '', '', '']
    const [dishName,setDishName] = useState('제육복음')
    const [ingredientAmount,setIngredientAmount] = useState('15')
    const route = useRoute();
    const paramData  = route.params;
    const [recipeData,setRecipeData] = useState<any>(paramData)
    function convertToHttps(path:string) {
        if (path.startsWith('http://')) {
            return path.replace('http://', 'https://');
        } else {
            return path;
        }
    }
    const RenderView = () => {
        useEffect(()=>{
            console.log('@@@@@@@@@@@@@@@@',recipeData.item)
        })
        
        const [renderingImage,setRenderingImage] = useState<Array<string>>([
            '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/dishes01.jpeg',
            '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/dishes02.jpeg',
            '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/dishes03.jpeg',
            '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/dishes02.jpeg',
        ])
        return(
            <View style={{ height: 500,alignSelf:"center", }}>
            <View
                style={{
                    flex:1,
                    width: getWeight()*0.7,
                    height: '100%',
                    }}>
                <View style={{
                    borderWidth:1,
                    borderBottomWidth:0,
                    borderColor:Colors.SEPARATED_LINE,
                    flex:0.4,
                    backgroundColor:Colors.BACKGROUND_LIGHTGRAY,
                    borderTopLeftRadius:25,
                    borderTopEndRadius:25,
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <View>
                        <Image 
                        style={{width:150,height:150,borderRadius:75}}
                        source={{uri:convertToHttps(recipeData.item.ATT_FILE_NO_MAIN)}}/>
                    </View>
                </View>
                <View style={{
                    position:"absolute",
                    width:'85%',
                    height:150,
                    backgroundColor:Colors.BACKGROUND_DEFAULT,
                    borderColor:Colors.SEPARATED_LINE,
                    borderWidth:1.5,
                    left:22,
                    top:180,
                    zIndex:1,
                    borderRadius:10,
                    alignItems:"center",
                    
                    }}>
                        <View style={{flex:0.35,justifyContent:"center",alignItems:"center"}}>
                            {/* title section (ingredient,name) */}
                            <Text style={{
                                fontSize:18,
                                fontWeight:"bold",
                                marginTop:10
                                }}>{recipeData.item.RCP_NM}</Text>
                            <Text style={{
                                fontSize:14,
                                marginTop:5,
                                alignSelf:"center",
                                color:Colors.SEPARATED_LINE_TORNUP}}>{ingredientAmount} ingredients</Text>
                        </View>
                        <View style={{flex:0.75,width:'100%'}}>
                            {/* ingredient image section */}
                            {/* <FlatList
                                data={renderingImage}
                                horizontal = {true}
                                scrollEnabled = {false}
                                contentContainerStyle={{alignItems:"center",paddingHorizontal:8}}
                                renderItem={({item,index}:any)=>{
                                    console.log(item)
                                    return(
                                        <Image 
                                            style={{width:50,height:50,borderRadius:10,marginRight:5}}
                                            source={{uri:item}}/>
                                    )
                                }}/> */}
                        </View>
                        
                    </View>
                <View style={{
                    flex:0.6,
                    borderWidth:1,
                    borderTopWidth:0,
                    borderColor:Colors.SEPARATED_LINE,
                    backgroundColor:Colors.BACKGROUND_DEFAULT,
                    borderBottomRightRadius:25,
                    borderBottomLeftRadius:25,
                    zIndex:0
                }}>
                    <View style={{flex:0.5}}>

                    </View>
                    <View style={{flex:0.5,width:'100%',alignItems:"center",}}>
                    <Text style={{color:Colors.SEPARATED_LINE_TORNUP,marginTop:10}}>작성자 인제 레시피</Text>        
                    {/* <Text style={{color:Colors.SEPARATED_LINE_TORNUP}}>총 열량 152kcal</Text> */}
                    {/* <Text style={{color:Colors.SEPARATED_LINE_TORNUP,marginTop:75}}>총 열량 152kcal</Text>     */}
                    </View>
                    
                </View>
            </View>
        </View>
        )
    }
    const NextButton = () => {
        return(
            <Text style={{fontSize:50,color:Colors.SELECTED_ITEM_BACKGROUND}}>{`>`}</Text>
        )
    }
    const PrevButton = () => {
        return(
            <Text style={{fontSize:50,color:Colors.SELECTED_ITEM_BACKGROUND}}>{`<`}</Text>
        )
    }
    const onPressCheckRecipe = () => {
        navigation.navigate('RecipeView',{item:recipeData.item})
    }
    return (
        <View style={{ flex: 1,width:'100%' }}>
            <View style={{ flex: 0.06 }}>
                <RefrigatorHeader title="결과화면" left={true} right={false} handlePresentModalPress={() => { }} />
            </View>
            <View style={{ flex: 0.94 }}>
                <View style={{ flex: 0.85, alignItems: "center", justifyContent: "center" }}>
                    {/* item view */}
                    <View style={{ alignItems: "center",justifyContent:"center",paddingTop:20 }}>
                        {/* <Swiper
                            showsPagination={false}
                            showsButtons={true}
                            index={0}
                            prevButton={<PrevButton/>}
                            nextButton={<NextButton/>}
                            loop={false}
                            style={{}}>
                            
                        </Swiper> */}
                        <RenderView/>
                    </View>
                    
                </View>
                <View style={{ 
                    flex: 0.15,
                    alignItems:"center",
                    justifyContent:"center",
                    width:'100%',
                     }}>
                    {/* button view */}
                    <Pressable 
                        onPress={onPressCheckRecipe}
                        style={{
                            backgroundColor:Colors.REFRIGATOR_AI_BUTTON,
                            width:'60%',
                            height:'50%',
                            borderRadius:30,
                            alignItems:"center",
                            justifyContent:"center"}}>
                        <Text style={{
                            color:Colors.FONT_WHITE,
                            fontSize:18,
                            fontWeight:'bold'
                        }}>레시피 확인하기</Text>
                    </Pressable>        
                </View>
            </View>
        </View>
    )
}