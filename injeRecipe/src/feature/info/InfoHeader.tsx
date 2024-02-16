import React from "react"
import { Text, View } from "react-native"

export const InfoHeader =(userData:any)=>{
    console.log(userData.userData.user.name)
    return(
        <View style={{justifyContent:"center",paddingHorizontal:10,flex:1,alignItems:"center",}}>
            <Text>{userData.userData.user.name}</Text>
        </View>
    )
}