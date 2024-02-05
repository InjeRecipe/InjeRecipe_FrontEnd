import React from "react";
import { Pressable, Text, View } from "react-native";
import { COLORS } from "../../color/Colors";
import { useNavigation } from "@react-navigation/native";

export function SignUpButton({LoginIsExpanded}:any){
    const navigation = useNavigation<any>()
    const onPressSignUp = () => {
        
        navigation.navigate('HomeStack',{screen:'SignUp'})
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
            backgroundColor:COLORS.BUTTON_SIGNUP
        }}
        onPress={onPressSignUp}>
            
            <Text style={{ fontSize: 22, color: "#FFFFFF" }}>회원가입</Text>
            
            
        </Pressable>}
        </>
    )
}