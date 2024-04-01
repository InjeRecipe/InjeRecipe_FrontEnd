import React, { useEffect } from "react"
import { Image, Pressable, SafeAreaView, Text, View } from "react-native"
import { Colors } from "../../color/Colors"
import  Icon  from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export const NullRecipeBody = ({recipeData,isArray}:any) => {
    const navigation = useNavigation<any>();
    const onPressBackArrow = () => {
        navigation.pop()
    }
    console.log("NullRecipeBody",typeof recipeData.item)
    useEffect(()=>{
        console.log(recipeData.item.recipe_nm,"@@@")
    },[])
    return(
        <SafeAreaView>
        <View style={{
            borderWidth: 1,
            borderBottomWidth: 0,
            borderColor: Colors.SEPARATED_LINE,
            flex: 0.4,
            backgroundColor: Colors.BACKGROUND_LIGHTGRAY,
            borderTopLeftRadius: 25,
            borderTopEndRadius: 25,
            alignItems: "center",
            justifyContent: "center"
        }}>
            
           <View style={{flex:0.72,alignItems:"center"}}>
                <Image 
                    style={{width:200,height:200}}
                    source={{uri:"/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/nullRecipeImage.png"}}/>
                <Text style={{fontSize:18,marginVertical:20,height:200,textAlign:"center"}}>
                <Text style={{fontSize:24,color:Colors.BUTTON_SIGNIN}}> 챗봇</Text>이 추천한{`\n`}
                <Text style={{fontSize:22,color:Colors.BUTTON_SIGNUP}}>{recipeData.isArray?
                `${recipeData.item[0].recipe_nm}(은/는)${`\n`}`:`${recipeData.item.recipe_nm.trim()}(은/는)${`\n`}`
                }</Text>
                    아직 작성된 레시피가 없습니다.{`\n`}가장 먼저 레시피를 작성해보세요!
                </Text>
                <Pressable style={{
                    width:200,
                    height:65,
                    alignItems:"center",
                    justifyContent:"center",
                    borderRadius:23,
                    backgroundColor:Colors.REFRIGATOR_AI_BUTTON,
                    marginTop:50
                    }}
                    onPress={()=>{navigation.navigate('EditStack', { screen: 'EditInfoView' })}}
                    >
                    <Text style={{color:Colors.FONT_WHITE,fontSize:18,}}>
                        작성하러 가기
                    </Text>
                </Pressable>

           </View>
        </View>
        </SafeAreaView>
    )
}