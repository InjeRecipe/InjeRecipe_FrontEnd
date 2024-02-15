import React, { useEffect, useState } from "react"
import { Image, Pressable, StyleSheet, Text } from "react-native"
import { useSignIn } from "../../hooks/useSignIn"
import { useNavigation } from "@react-navigation/native"
import { GoogleSigninButton } from "@react-native-google-signin/google-signin"
import { url } from "inspector"

type props ={
    text:string,
    value:string
}
export function LoginButton({text,value}:props){
    const {
        googleSigninConfigure,
        onPressGoogleSignIn
    } = useSignIn()
    const [btBgColor,setBtBgColor] = useState('')
    const configureGoogleUser = async() =>{
        const userData = await googleSigninConfigure()
        console.log('hi user',userData)
    }
    const navigation = useNavigation<any>()
    useEffect(()=>{
        if(text == "구글 계정을 통한 로그인"){
            console.log('configure')
            configureGoogleUser 
            setBtBgColor('white')           
        }
        else{
            setBtBgColor ('#A25426')
        }
    },[text])
    const onPressLogin = () =>{
        console.log("???")
        if(value == "signin"){navigation.navigate('HomeStack',{screen:'SignIn'})}
        else if(value=="inje"){navigation.navigate('Bottom')}
        else if(value =="google"){
            const getUserData = async() => {
                const res = await onPressGoogleSignIn()
                console.log(res,'res')
                // res 요 녀석을 전역 스테이트로 관리하면 오케이
            }
            getUserData()
        }
    }
    return(
        <Pressable style={{
            width:"75%",
            alignItems:"center",
            justifyContent:"center",
            height:50,
            borderRadius:18,
            backgroundColor:btBgColor,
            shadowOpacity:1,
            shadowOffset:{width:0,height:2},
            flexDirection:'row'
        }}
        onPress={onPressLogin}>
        {btBgColor=='white'?
        <Image 
            style={{width:20,height:20,marginRight:10}}
        source={{uri:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/googleIcon.png'}}/>:null}
            <Text style={{fontSize:22,color:btBgColor=='white'?'black':'white'}}>{text}</Text>
        </Pressable>
    )
}