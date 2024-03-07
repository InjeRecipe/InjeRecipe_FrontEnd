import React from "react"
import { TextInput, View } from "react-native"

export const InputBox = ({title,value,setValue}:any) => {
    console.log(title)
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
                secureTextEntry={title=="비밀번호"?true:false}
            />
        </View>
    )
}