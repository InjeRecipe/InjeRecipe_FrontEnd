import React, { useEffect } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import { useNavigation } from "@react-navigation/core"

export const RecipeRenderItem=({item,index}:any) =>{
    const { getHeight, getWeight } = useDimention()
    const data= item
    useEffect(()=>{
        console.log('item***/*/*/*/*/*/**//*/*wwsw', data.COOKRCP01.row[0])
    },[])
    console.log(item)
    function convertToHttps(path:string) {
        if (path.startsWith('http://')) {
            return path.replace('http://', 'https://');
        } else {
            return path;
        }
    }
    const navigation = useNavigation<any>()
    const onPressRecipe = () => {
        const item = data.COOKRCP01.row[0]
        navigation.navigate('RecipeView',{item})
    }
    const ItemView = ({num}:any) => {
        
        return(
            <TouchableOpacity style={{flex:1}} onPress={onPressRecipe}>
            <View style={{ 
                flex: 0.5,
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
                    source={{uri:convertToHttps(data.COOKRCP01.row[0].ATT_FILE_NO_MAIN)}}/>
                </View>
                <View style={{flex:0.3,width:'100%',alignItems:"center",justifyContent:"center",}}>
                    <Text style={{color:Colors.BUTTON_SIGNIN}}>
                        인제 레시피
                    </Text>
                <Text style={{}}>
                    {data.COOKRCP01.row[0].RCP_NM}
                </Text>
                </View>
                
            </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{
            width: getWeight() * 0.34,
            height: getHeight() * 0.45,
            

        }}>
            <ItemView num={0}/>
            {/* <ItemView num={1}/> */}
            
        </View>
    )
}