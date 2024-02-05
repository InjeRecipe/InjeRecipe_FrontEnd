import React from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";
import { useDimention } from "../../../hooks/useDimension";
import { HeaderSign } from "../../../component/HeaderSign";
import { useNavigation } from "@react-navigation/native";
import { SignUpView } from "../../../feature/sign/signup/SignUpView";
const{getHeight}=useDimention()
const height =getHeight()
export function SignUpScreen(){
    const navigate = useNavigation<any>()
    const onPressLeft = () => {
        navigate.goBack()
    }
    const onPressRight = () => {
        navigate.navigate("Home")
    }
    return(
         
        <View style={{flex:1 }}>
            <SafeAreaView style={{flex:1}}>
                <HeaderSign leftIcon="이전" rightIcon="" title="회원가입" onPressLeft={onPressLeft} onPressRight={onPressRight}/>
                <SignUpView/>
            </SafeAreaView>
        </View>
        
     
    )
}