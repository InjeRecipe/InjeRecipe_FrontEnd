import React from "react"
import { View } from "react-native"

type props={
    height:number|any
}
export function Margin({height}:props){
    return(
        <View style={{
            marginBottom:height
        }}/>
    )
}