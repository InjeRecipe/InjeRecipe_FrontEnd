import React from "react"
import { Pressable, Text, View } from "react-native"
import { useDimention } from "../hooks/useDimension"

import { useNavigation } from "@react-navigation/native"


type props = {
    title:string,
    leftIcon:string,
    rightIcon:string,
    onPressLeft:()=>void
    onPressRight:()=>void
}
export const HeaderSign = ({
    title,
    leftIcon,
    rightIcon,
    onPressLeft,
    onPressRight
}:props) =>{
    const {
        getHeight
    } = useDimention()
    const height = getHeight()
    

    return(
        <View style={{
            borderBottomWidth:0.3,
            borderColor:'gray',
            alignItems:"center",
            justifyContent:"center",
            height:height*0.08,
            flexDirection:"row",
            paddingHorizontal:15}}>
            <Pressable style={{flex:1,}} onPress={onPressLeft}>
                <Text>이전</Text>
            </Pressable>
            <View style={{flex:1, alignItems:"center"}}>
                <Text>{title}</Text>
            </View>
            <Pressable style={{flex:1,alignItems:"flex-end",}} onPress={onPressRight}>
                <Text>취소</Text>
            </Pressable>
        </View>
    )
}