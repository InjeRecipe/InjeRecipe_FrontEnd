import React, { useEffect, useState } from "react"
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import { RootReducerState } from "../../redux/store"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import Icon  from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/core"

export const SearchBody = ({searchItem, setSearchItem}:any) => {
    const {getHeight} = useDimention()
    // const data = useSelector((state:RootReducerState)=>state.recipe.searchRecipe)
//    const [renderData, setRenderData] = useState<any>(data)
    const navigation = useNavigation<any>()
    const RenderItem = ({item,index}:any) => {
        const path = `${item.ATT_FILE_NO_MAIN}`
        
        const onPressSearchItem = () => {
            navigation.navigate('RecipeView',{item})
        }
        function convertToHttps(path:string) {
            if (path.startsWith('http://')) {
                return path.replace('http://', 'https://');
            } else {
                return path;
            }
        }

        console.log(item)
        return(
            <TouchableOpacity onPress={onPressSearchItem}>
        <View style={{ 
            width: "100%",
            height: getHeight()*0.15,
            marginBottom:10,
            justifyContent:"center",
            alignItems:"center"
            }}>
                <View style={{
                    flex:1,
                    justifyContent:"center",
                    paddingHorizontal:20,
                    width:'90%',
                    borderWidth:0.2,
                    flexDirection:'row',
                    borderRadius:20,
                    borderColor:Colors.SEPARATED_LINE_TORNUP,
                    backgroundColor:Colors.BACKGROUND_WHITE_DOWN
                    }}>
                <View style={{flex:0.3,alignItems:"center",justifyContent:"center"}}>
                    {/* image section*/}
                    <Image 
                    source={{uri:convertToHttps(path)}}
                    style={{
                        width:"90%",
                        height:"65%",
                        borderRadius:15,
                        borderWidth:2,
                        borderColor:Colors.SEPARATED_LINE
                        }}/>
                </View>
                <View style={{flex:0.6,justifyContent:"center",paddingHorizontal:10}}>
                    {/* info section */}
                    <Text style={{fontSize:18,marginBottom:15}}>{item.RCP_NM}</Text>
                    <Text style={{fontSize:15,color:Colors.SEPARATED_LINE_TORNUP}}>{item.RCP_PAT2}</Text>
                    <Text style={{fontSize:15,color:Colors.BUTTON_SIGNIN}}>인제레시피</Text>
                </View>
                <View style={{flex:0.1, justifyContent:"center"}}>
                        <Icon name="chevron-forward-outline" size={22} color={Colors.ITEM_ARROW_GRAY}/>
                </View>
                </View>
            </View>
            </TouchableOpacity>
        )    
    }
    const RecipeResultView = () => {
        if (searchItem==null){
            return <DefaultView/>
        }
        else{
            
            return(
                
                <FlatList
                style={{flex:1,paddingTop:30}}
                bounces={false}
                data={searchItem.COOKRCP01.row}
                renderItem={({item,index}:any)=>{return(<RenderItem item={item} index={index}/>)}}
                />
            
            )
        }
    }
    const DefaultView = () => {
        return(
            null
        )
    }
    
    return(
          <RecipeResultView/>
        
        
    )
}