import React from "react"
import { TextInput, View } from "react-native"

export const InputBox = ({title,value,setValue}:any) => {
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