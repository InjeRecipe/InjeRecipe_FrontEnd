import React, { useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import { useNavigation } from "@react-navigation/core"
import { useSelector } from "react-redux"
import { RootReducerState } from "../../redux/store"
import { recipeService } from "../../services/recipeService"
import { useConvert } from "../../hooks/useConvert"
import { LoadingIndicaotrView } from "../../component/LoadingIndicatorView"

export const RecipeRenderItem=({item,index,value,setIsLoading}:any) =>{
    const { getHeight, getWeight } = useDimention()
    const {POST_IMAGE_SEARCH} = recipeService()
    const {converTextToArray} = useConvert()
    const data: any = useSelector<RootReducerState>((state) => state.login.weatherRecipe)
    const token:any = useSelector<RootReducerState>((state) => state.login.userToken)
    
    function convertToHttps(path:string) {
        if(path == null) {
            return '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/nullRecipeImage.png'
        }
        else if (path.startsWith('http://')) {
            return path.replace('http://', 'https://');
        } 
        else {
            return path;
        }
    }
    
    const ItemView = ({num}:any) => {
        const navigation = useNavigation<any>()
        
    const onPressRecipe = () => {
        setIsLoading(true)
        const item = data[num]
        console.log(item.recipe_parts_dtls)
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
        console.log("@@@@@",item)
        navigation.navigate('RecipeView',{item})
    }
        
    }
        // console.log(data[num])
        if(data[num]!= undefined){
            return(
                <TouchableOpacity style={{flex:1,}} onPress={onPressRecipe}>
                <View style={{ 
                    flex: 0.9,
                    backgroundColor:Colors.FONT_WHITE,
                    borderRadius:15,
                    marginRight:10,
                    marginBottom:15,
                    borderWidth:0.3,
                    borderColor:Colors.SEPARATED_LINE_TORNUP
                     }}>
                    <View style={{flex:0.7,width:'100%'}}>
                        <Image 
                        style={{flex:1,
                            borderTopLeftRadius:10,
                            borderTopRightRadius:10}}
                        source={{uri:convertToHttps(data[num].recipe_file_s)}}/>
                    </View>
                    <View style={{flex:0.3,width:'100%',alignItems:"center",justifyContent:"center",}}>
                        <Text style={{color:Colors.BUTTON_SIGNIN}}>
                            인제 레시피
                        </Text>
                    <Text style={{
                        alignContent:"center",
                        justifyContent:"center",
                        textAlign:"center",
                        alignItems:"center"}} numberOfLines={2}  >
                        {data[num].recipe_nm}
                    </Text>
                    </View>
                    
                </View>
                </TouchableOpacity>
            )
        }
        // else if (){

        // }
        else null
        
    }
    return (
        
        <View style={{
            width: getWeight() * 0.34,
            height: getHeight() * 0.45,}}>
            <ItemView num = {index*2}/>
            <ItemView num = {index*2+1}/>
        </View>
    )
}