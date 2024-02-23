import React from "react"
import { Image, Text, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"

export const RecipeRenderItem=({item,index}:any) =>{
    const { getHeight, getWeight } = useDimention()
    const ItemView = ({num}:any) => {
        console.log('item',item.item[num])
        return(
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
                    source={{uri:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/testDishImage.jpeg'}}/>
                </View>
                <View style={{flex:0.3,width:'100%',alignItems:"center",justifyContent:"center",}}>
                    <Text>
                        작성자 이름
                    </Text>
                <Text style={{color:Colors.BUTTON_SIGNIN}}>
                    {item.item[num].title}
                </Text>
                </View>
                
            </View>
        )
    }
    return (
        <View style={{
            width: getWeight() * 0.34,
            height: getHeight() * 0.45,
            

        }}>
            <ItemView num={0}/>
            <ItemView num={1}/>
            
        </View>
    )
}