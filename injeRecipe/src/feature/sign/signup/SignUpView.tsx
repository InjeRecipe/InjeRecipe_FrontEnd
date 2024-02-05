import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Header } from "../../../component/Header";
import { LoginButton } from "../../home/LoginButton";
import { Margin } from "../../../component/Margin";
import { SignUpButton } from "../../home/SignUpButton";
import { InputBox } from "../../../component/InputBox";
import { SubmitButton } from "../../../component/SubmitButton";


export function SignUpView(){
    const [id,setId] = useState('')
    const [pw,setPw] = useState('')
    const [name,setName] = useState('')
    const [nickName,setNickName] = useState('')
    return(
        <View style={{flex:1,alignItems:"center"}}>
            <Margin height={50}/>
            <InputBox title="아이디" value={id} setValue={setId}/>  
            <Margin height={8}/>
            <InputBox title="비밀번호" value={pw} setValue={setPw}/>
            <Margin height={8}/>
            <InputBox title="이름" value={name} setValue={setName}/>
            <Margin height={8}/>
            <InputBox title="닉네임" value={nickName} setValue={setNickName}/>
            <Margin height={50}/>
            <SubmitButton/>
        </View>
    )
}