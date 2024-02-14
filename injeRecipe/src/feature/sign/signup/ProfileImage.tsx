import React from "react";
import { Pressable, View } from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export function ProfileImage(setImage:any){
    const onPressImagePicker = () =>{
        launchImageLibrary({mediaType:"photo",
        
    },(response)=>{
        console.log(response)
    })
    }
    return(
        <View style={{borderWidth:1,flex:0.4,width:'70%',alignItems:"center"}}>
            <Pressable style={{width:'50%',borderWidth:1}}>

            </Pressable>
        </View>
    )
}