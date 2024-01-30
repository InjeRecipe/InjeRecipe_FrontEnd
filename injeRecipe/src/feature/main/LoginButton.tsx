import React from "react"
import { Pressable, Text } from "react-native"

type props ={
    text:string
}
export function LoginButton({text}:props){
    return(
        <Pressable style={{
            width:"75%",
            borderWidth:1,
            alignItems:"center",
            justifyContent:"center",
            height:50,
            borderRadius:18
        }}>
            <Text style={{fontSize:22}}>{text}</Text>
        </Pressable>
    )
}