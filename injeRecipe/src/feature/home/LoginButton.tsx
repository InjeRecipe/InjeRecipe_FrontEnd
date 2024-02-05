import React, { useEffect } from "react"
import { Pressable, Text } from "react-native"
import { useSignIn } from "../../hooks/useSignIn"
import { useNavigation } from "@react-navigation/native"


type props ={
    text:string,
    value:any
}
export function LoginButton({text,value}:props){
    const {
        googleSigninConfigure,
        onPressGoogleSignIn
    } = useSignIn()
    const navigation = useNavigation<any>()
    useEffect(()=>{
        if(text == "구글을 통한 로그인"){
            googleSigninConfigure()
        }
    },[text])
    const onPressLogin = () =>{
        console.log("???")
        if(value == "signin"){navigation.navigate('HomeStack',{screen:'SignIn'})}
        else if(value=="inje"){navigation.navigate('Bottom')}
        
    }
    return(
        <Pressable style={{
            width:"75%",
            alignItems:"center",
            justifyContent:"center",
            height:50,
            borderRadius:18,
            backgroundColor:"#A25426"
        }}
        onPress={text=="로그인"?onPressLogin:onPressGoogleSignIn}>
            <Text style={{fontSize:22,color:'white'}}>{text}</Text>
        </Pressable>
    )
}