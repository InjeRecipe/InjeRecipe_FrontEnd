import React from "react";
import { Pressable, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";


export function SubmitButton({LoginIsExpanded}:any){
    const navigation = useNavigation<any>()
    const onPressSignUp = () => {
        
        navigation.navigate('HomeStack',{screen:'SignIn'})
    }
    return(
        <>
        {LoginIsExpanded?null:
        <Pressable style={{
            width:"75%",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:18,
            height:50,
            backgroundColor:"#323232"
        }}
        onPress={onPressSignUp}>
            
            <Text style={{ fontSize: 22, color: "#FFFFFF" }}>완료</Text>
            
            
        </Pressable>}
        </>
    )
}