import React, { useEffect } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import { useNavigation } from "@react-navigation/core"
import { useSelector } from "react-redux"
import { RootReducerState } from "../../redux/store"

export const KeywordRenderItemView=({item,index,value}:any) =>{
    const { getHeight, getWeight } = useDimention()
    const data: any = useSelector<RootReducerState>((state) => state.login.defaultKrRecipe)
    
    console.log(data)
    function convertToHttps(path:string) {
        if (path.startsWith('http://')) {
            return path.replace('http://', 'https://');
        } else {
            return path;
        }
    }
    
    const ItemView = ({num}:any) => {
        const navigation = useNavigation<any>()
    const onPressRecipe = () => {
        const item = data[num]
        navigation.navigate('RecipeView',{item})
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