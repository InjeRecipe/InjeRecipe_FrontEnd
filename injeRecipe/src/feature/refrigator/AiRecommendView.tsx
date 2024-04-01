import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, SafeAreaView, Text, View ,ViewProps} from "react-native";
import { RefrigatorHeader } from "./RefrigatorHeader";
import BitSwiper from 'react-native-bit-swiper';
import { Colors } from "../../color/Colors";
import Swiper from 'react-native-swiper'
import { useDimention } from "../../hooks/useDimension";
import { useNavigation, useRoute } from "@react-navigation/core";
import { NullRecipeBody } from "../recipe/NullRecipeBody";
import { recipeService } from "../../services/recipeService";
import { useConvert } from "../../hooks/useConvert";
import { useSelector } from "react-redux";
import { RootReducerState } from "../../redux/store";
import { LoadingIndicaotrView } from "../../component/LoadingIndicatorView";
export function AiRecommendView({}) {
    const {getWeight} = useDimention()
    const navigation =useNavigation<any>()
    const data = ['', '', '', '']
    const [dishName,setDishName] = useState('제육복음')
    const [nowIndex,setNowIndex] = useState(0)
    const route = useRoute();
    const paramData  = route.params;
    const [recipeData,setRecipeData] = useState<any>(paramData)
    const {POST_IMAGE_SEARCH} = recipeService()
    const {converTextToArray} = useConvert()
    const token:any = useSelector<RootReducerState>((state) => state.login.userToken)
    const [isLoding,setIsLoading] = useState(false)
   useEffect(()=>{console.log(recipeData.isNull)})
   
    function convertToHttps(path:string) {
        if (path == null){
            return '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/nullRecipeImage.png'
        }
        else if (path.startsWith('http://')) {
            return path.replace('http://', 'https://');
        }
        else {
            return path;
        }
    }
    
    const RenderView = ({item,index}:any) => {
        const convertStringData = (string:any) => {
            if(string!=null){
                const replacedString = string.replace(/\n/g, ',');
            return replacedString
            }
            
        }
        const ingredientArray = convertStringData(item.recipe_parts_dtls).split(',');
        console.log('RENDERVIEW',item)
        return(
            <View style={{ height: 500,alignSelf:"center", paddingTop:20}} key={`${index}-recommendItem`}>
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
                    flex:0.5,
                    backgroundColor:Colors.BACKGROUND_LIGHTGRAY,
                    borderTopLeftRadius:25,
                    borderTopEndRadius:25,
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <View>
                        <Image 
                        style={{width:150,height:150,borderRadius:75}}
                        source={{uri:convertToHttps(item.recipe_file_s)}}/>
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
                    top:200,
                    zIndex:1,
                    borderRadius:10,
                    alignItems:"center",
                    
                    }}>
                        <View style={{flex:0.35,
                        
                            justifyContent:"center",alignItems:"center"}}>
                            {/* title section (ingredient,name) */}
                            <Text style={{
                                fontSize:18,
                                fontWeight:"bold",
                                marginTop:30,
                                
                                }}>{item.recipe_nm}</Text>
                            <Text style={{
                                fontSize:14,
                                marginTop:10,
                                alignSelf:"center",
                                
                                marginBottom:5,
                                color:Colors.SEPARATED_LINE_TORNUP}}>{ingredientArray.length} ingredients</Text>
                                <Text style={{color:Colors.SEPARATED_LINE_TORNUP}}>조리방식 {item.recipe_way}</Text>    
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
                    <Text style={{color:Colors.SEPARATED_LINE_TORNUP}}>총 열량 {item.recipe_seq}kcal</Text>
                    
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
    const onPressCheckRecipe = (nowIndex:any) => {
        setIsLoading(true)
        const item =recipeData.item[nowIndex]
        if(recipeData.item[nowIndex].recipe_parts_dtls!= null){
            const postData = converTextToArray(recipeData.item[nowIndex].recipe_parts_dtls)
            
            POST_IMAGE_SEARCH({
                data:postData,
                token:token
            }).then((res)=>{
                if(postData[0] == '재료'){postData.shift();res.data.shift()}
        
                setIsLoading(false)
                
                navigation.navigate('RecipeView',{item,res,postData})
            })
        }
        else{
            setIsLoading(false)
            console.log('RecipeViewEEEE',item)
            
        }
     
    }
    return (
        <View style={{ flex: 1,width:'100%' }}>
            <View style={{ flex: 0.06 }}>
                <RefrigatorHeader title="결과화면" left={true} right={false} handlePresentModalPress={() => { }} />
            </View>
            {recipeData.isNull?
            <View style={{flex:1,alignItems:"center"}}>

            <NullRecipeBody recipeData={recipeData} />
            </View>:
            <>
            
            <View style={{ flex: 0.94 }}>
                <View style={{ flex: 0.85, alignItems: "center", justifyContent: "center" }}>
                    {/* item view */}
                    <View style={{ alignItems: "center",justifyContent:"center",paddingTop:20,flexDirection:'row' }}>
                        <Swiper
                            showsPagination={false}
                            showsButtons={true}
                            index={nowIndex}
                            prevButton={<PrevButton/>}
                            nextButton={<NextButton/>}
                            onIndexChanged={(value)=>setNowIndex(value)}
                            loop={false}
                            style={{}}>
                            {recipeData.item.map((item:any,index:any)=>{
                                console.log(index)
                                
                                return(
                                 <RenderView item={item} index={index}/>
                                
                                )
                            })}
                        </Swiper>
                        
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
                        onPress={()=>{onPressCheckRecipe(nowIndex)}}
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
            </>
            
            }
            {isLoding?<LoadingIndicaotrView/>:null}
        </View>
        
    )
}