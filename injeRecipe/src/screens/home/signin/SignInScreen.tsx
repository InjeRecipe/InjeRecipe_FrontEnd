import React from "react";
import { SignInView } from "../../../feature/sign/signIn/SignInView";

import { ImageBackground, SafeAreaView, View } from "react-native";
import { useDimention } from "../../../hooks/useDimension";
import { HeaderSign } from "../../../component/HeaderSign";
import { useNavigation } from "@react-navigation/native";
const{getHeight}=useDimention()
const height =getHeight()
export function SignInScreen(){
    const navigate = useNavigation<any>()
    const onPressLeft = () => {
        navigate.goBack()
    }
    const onPressRight =() =>{
        navigate.navigate("Home")
    }
    return(
         
        <View style={{flex:1 }}>
            <SafeAreaView style={{flex:1}}>
                <HeaderSign leftIcon="이전" rightIcon="" title="로그인" onPressLeft={onPressLeft} onPressRight={onPressRight}/>
                <SignInView/>
            </SafeAreaView>
        </View>
        
     
    )
}