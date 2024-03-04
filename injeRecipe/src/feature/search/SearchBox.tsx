import React, { useEffect, useRef, useState } from "react";
import { Animated, Keyboard, Pressable, Text, TextInput, View } from "react-native";
import { Colors } from "../../color/Colors";
import Icon from 'react-native-vector-icons/Ionicons'
import { recipeService } from "../../services/recipeService";
import { useDispatch } from "react-redux";
import { searchRecipe } from "../../redux/action/actionRecipe";

export function SearchBox({searchItem,setSearchItem}:any){
    const {GET_SERACH_RECIPE} = recipeService()
    const interpolateAnim = useRef(new Animated.Value(0)).current
    const [text,setText] = useState('')
    const [isExpanded,setIsExpanded] = useState(false)
    const dispatch = useDispatch()
    const onPressSearchButton = () =>{
        Animated.timing(interpolateAnim, {
            toValue: isExpanded?0:1,
            duration:200,
            delay:350,
            useNativeDriver:false,
        }).start(()=>{
            setIsExpanded(!isExpanded)
        })
        // 레시피 요청
       
       
        
    }
    const focusOutSearch = () =>{
        onPressSearchButton()
        const data = {
            start:0,
            end:5,
            rcpNm:text
        }
        console.log(data,'@@@@@@@@@@@@@')
        if(text!=''){
            GET_SERACH_RECIPE(data).then((res:any)=>{
                console.log('res===========',res)
                setSearchItem(res)
            })
            
        }
    }
    return(
        <View style={{flexDirection:"row",paddingHorizontal:10}}>
            {/* 전체적인 뷰 */}
            <Animated.View style={{flex:
            interpolateAnim.interpolate({
                inputRange:[0,1],
                outputRange:[1,0.9]
            })}}>
            {/* 검색창 애니메이션 뷰 */}
            <View style={{
                backgroundColor:Colors.SEPARATED_LINE,
                height:40,
                paddingHorizontal:10,
                alignItems:"center",
                width:"100%",
                flexDirection:'row',
                borderRadius:10,
                borderWidth:1}}>
                    <Icon style={{}} name="search" size={20}/>
                <TextInput
                    style={{
                        flex:1,
                        paddingHorizontal:10}}
                    value={text}
                    onFocus={onPressSearchButton}
                    onChangeText={(value)=>{setText(value)}}
                    onSubmitEditing={()=>{Keyboard.dismiss}}
                    onEndEditing={()=>{setIsExpanded(false);focusOutSearch();}}
                    placeholder="레시피를 검색해주세요"/>
            </View>
            </Animated.View>
            {/* 취소 버튼이 나왔다 사라지는 뷰 */}
            {isExpanded?<Animated.View style={{
                alignItems:"center",
                flex:interpolateAnim.interpolate({
                inputRange:[0,1],
                outputRange:[0,0.1]}),
                justifyContent:"center"}}>
                <Pressable 
                    onPress={()=>{
                    setText('')
                    Keyboard.dismiss()}}>
                    <Text>취소</Text>
                </Pressable>
            </Animated.View>:null
            }
        </View>
    )
}