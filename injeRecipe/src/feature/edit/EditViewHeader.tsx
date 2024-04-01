import React, { useEffect } from "react"
import { Pressable, Text, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native"
import { recipeService } from "../../services/recipeService"
import { useSelector } from "react-redux"
import { RootReducerState } from "../../redux/store"
import { useConvert } from "../../hooks/useConvert"
import { useRecipe } from "../../hooks/useReipce"
export const EditViewHeader = ({prev,next}:any) => {
    const { getHeight } = useDimention()
    const navigation = useNavigation<any>()
    const {POST_RECIPE_UPLOAD} = recipeService()
    const token = useSelector((state:RootReducerState)=>state.login.userToken)
    const userName = useSelector((state:RootReducerState)=>state.login.loginUser.user.name)
    const {
        convertArraytoText,
        convertObjectToArray} = useConvert()
    const {recipePostData,setRecipeSeq} = useRecipe()
    console.log("userName",userName)
    const onPressNext = () => {
       
        if(next=='다음'){
            navigation.navigate('EditStack',{screen:"EditView"})
        }
        else{
            convertArraytoText(recipePostData)
            convertObjectToArray(recipePostData)
            recipePostData.recipeImages.shift()
            setRecipeSeq(userName)
            console.log(recipePostData)
            POST_RECIPE_UPLOAD({
                data:recipePostData,
                token:token
            }).then(()=>{
                navigation.navigate('Bottom') 
            })
            
        }
    }
    const onPressPrev = () => {
        navigation.pop()
    }
    useEffect(()=>{
        console.log("@@@@@@@@@@@????????")
    },[])
    return (
        <View style={{ 
            height: getHeight() * 0.06,
            backgroundColor: Colors.BUTTON_SIGNIN,
            alignItems:"center",
            justifyContent:"center",
            flexDirection:'row'
            }}>
                <Pressable style={{
                    flex:0.15,
                    width:'100%',
                    alignItems:"center"}}
                    onPress={onPressPrev}>
                    <Icon size={16} color='white' name="chevron-back"/>
                </Pressable>
                <View style={{flex:0.7,alignItems:"center"}}>
                    <Text style={{
                        color:Colors.FONT_WHITE,
                        fontSize:18,
                        fontWeight:'bold'}}>레시피 작성하기</Text>        
                </View>
                <Pressable style={{
                    flex:0.15,
                    width:'100%',
                    alignItems:"center"}}
                    onPress={onPressNext}>
                    <Text style={{color:'white',fontSize:15}}>{next=='다음'?next:'완료'}</Text>
                </Pressable>
            
        </View>
    )
}