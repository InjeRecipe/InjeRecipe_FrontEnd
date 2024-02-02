import React from "react";
import { Pressable, Text, View } from "react-native";

export function SignUpButton({LoginIsExpanded}:any){
    return(
        <>
        {LoginIsExpanded?null:
        <View style={{
            width:"75%",
            borderWidth:1,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:18,
            height:50
        }}>
            
            <Text style={{fontSize:22}}>회원가입</Text>
            
            
        </View>}
        </>
    )
}