import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { InfoHeader } from "./InfoHeader";
import { useSelector } from "react-redux";
import { RootReducerState } from "../../redux/store";
import { url } from "inspector";
import { useNavigation } from "@react-navigation/core";
import { Colors } from "../../color/Colors";
import { useSignIn } from "../../hooks/useSignIn";
import { recipeService } from "../../services/recipeService";
import { useConvert } from "../../hooks/useConvert";
import { LoadingIndicaotrView } from "../../component/LoadingIndicatorView";

export function InfoView(){
    const userData = useSelector((state:RootReducerState)=> state.login.loginUser)
    const token = useSelector((state:RootReducerState)=> state.login.userToken)
    const navigation = useNavigation<any>();
    const {googleSignOut} = useSignIn()
    const {POST_MEMBER_BOARD_RECIPE,POST_IMAGE_SEARCH} = recipeService()
    const [recipeData,setRecipeData] = useState([])
    const [isLoding,setIsLoading] = useState(false)
    
    const {converTextToArray} = useConvert()
    useEffect(()=>{
        console.log('infoUserData',userData)
        POST_MEMBER_BOARD_RECIPE(token).then((res:any)=>{
            setRecipeData(res.data)
        })
    },[])
    
    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView bounces={false}>
                <View style={{height:50,}}>
                    {/* header */}
                    <InfoHeader/>
                </View>
                <View style={{height:120,borderBottomWidth:0.4,flexDirection:'row'}}>
                    {/* header */}
                    <View style={{
                        flex:0.4,
                        alignItems:"center",
                        justifyContent:"center",
                        borderRightWidth:0.4
                        }}>
                        {/* image */}
                        <Image
                            style={{width:70,height:70,borderRadius:35}}
                            source={{uri:userData.user.photo}}
                        />
                    </View>
                    <View style={{
                        flex:0.6,
                        justifyContent:"center",
                        paddingHorizontal:20,
                    }}>
                        {/* recipe text */}
                        <Text style={{fontSize:17,marginBottom:10}}>{userData.user.name}</Text>
                        <Text style={{fontSize:15,marginBottom:10}}>나의 레시피 0</Text>
                    </View>
                    
                    {/* <View style={{borderWidth:1,borderRadius:25,}}>
                    </View> */}
                </View>
                <View style={{}}>
                    <Text style={{
                        fontSize:20,
                        marginTop:15,
                        marginLeft:20,
                        marginBottom:15,
                        fontWeight:'bold'}}>나의 레시피</Text>
                    <FlatList
                        data={recipeData}
                        numColumns={2}
                        scrollEnabled={false}
                        style={{paddingHorizontal:18,paddingTop:20}}
                        renderItem={({item,index}:any)=>{
                            const onPressRecipe = () => {
                                setIsLoading(true)
                                console.log(item)
                                // navigation.navigate('RecipeView',{item})
                                if(item.recipe_parts_dtls!= null){
                                    const postData = converTextToArray(item.recipe_parts_dtls)
                                    
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
                                    navigation.navigate('RecipeView',{item})
                                }
                            }
                            console.log("FLatList Render",item)
                            return(
                                <TouchableOpacity style={{borderWidth:1,
                                    width:175,height:175,
                                    marginRight:5,
                                    marginBottom:5
                                }}
                                    onPress={onPressRecipe}
                                >
                                    <Image 
                                        style={{width:175,height:175}}
                                    source={{uri:item.recipe_file_s}}/>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                    {/* flatlist로 대체 피드 형식으로? */}
                <Pressable style={{width:300,height:50,
                borderRadius:15,
                alignSelf:"center",
                marginTop:20,borderWidth:0.5,
                justifyContent:"center",
                borderColor:Colors.SEPARATED_LINE_TORNUP}} onPress={()=>{
                    googleSignOut().then(()=>{
                        setTimeout(()=>{

                        },1000)
                        
                        navigation.navigate("Home")
                    })
                    
                    }}>
                        <Text style={{fontSize:22,alignSelf:"center"}}>로그아웃</Text>
                    </Pressable>
                    </ScrollView>
                    {isLoding?<LoadingIndicaotrView/>:null}
        </SafeAreaView>
    )
}