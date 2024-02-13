import React, { useCallback, useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Colors } from "../../color/Colors";
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/core";
import { AddItemModalView } from "./AddItemModalView";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
type props = {
    id:string,
    func:()=>void}

type componentProps = {
    left:boolean,
    right:boolean,
    handlePresentModalPress:any
}
const HeaderIcon = ({id,func}:props) => {
    console.log("??",func)
    return(
        <Pressable style={{
            width: 24,
            height: 24,

            alignSelf: 'center',
            justifyContent: "center",
            backgroundColor: Colors.SEPARATED_LINE,
            alignItems: "center",
            borderRadius: 80}}
            onPress={func}>
            <Icon name={id}size={20} />
        </Pressable>
    )
}
export function RefrigatorHeader({
    left,
    right,
    handlePresentModalPress
    }:componentProps) {
    const navigation = useNavigation<any>()
    
    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.BUTTON_SIGNIN,
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingHorizontal: 20,
            flexDirection: "row",
            zIndex:0
        }}>
            <View style={{flex:0.1,height: '100%',justifyContent:"center"}}>
                {left?<HeaderIcon id="arrow-back" func={()=>{navigation.pop()}}/>:null}
                
            </View>
            <View style={{
                flex: 0.8,
                height: '100%',
                alignItems:"center",
                justifyContent: "center",
            }}>
                <Text style={{
                    color: Colors.FONT_WHITE,
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>나의 냉장고</Text>
            </View>
            <View style={{ flex:0.1,height: '100%',justifyContent:"center"}}>
                {/* <HeaderIcon func={}/> */}
                {right?<HeaderIcon id="add" func={handlePresentModalPress}/>:null}
            </View>
            
        </View>
    )
}