import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Header } from "../../../component/Header";
import { LoginButton } from "../../home/LoginButton";
import { Margin } from "../../../component/Margin";

const InputBox = ({title,value,setValue}:any) => {
    return(
        <View style={{flexDirection:"row"}}>
            <TextInput
                style={{
                    borderWidth:0.5,
                    flex:0.7,
                    height:50,
                    borderRadius:20,
                    paddingHorizontal:10
                }}
                value={value}
                onChangeText={(text)=>{setValue(text)}}
                placeholder={title}
                secureTextEntry={title=="아이디"?false:true}
            />
        </View>
    )
}
export function SignInView(){
    const [id,setId] = useState('')
    const [pw,setPw] = useState('')
    
    return(
        <View style={{flex:1,alignItems:"center"}}>
            <Margin height={50}/>
            <InputBox title="아이디" value={id} setValue={setId}/>  
            <Margin height={5}/>
            <InputBox title="비밀번호" value={pw} setValue={setPw}/>
            <Margin height={50}/>
            <LoginButton text="로그인" value="inje"/>
        </View>
    )
}