import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Colors } from "../../../color/Colors";
export function ProfileImage(setImage:any){
    
    const [isImage,setIsImage] = useState(false)
    const [imagePath, setImagePath] = useState('')
    const onPressImagePicker = () =>{
        launchImageLibrary({mediaType:"photo",
        
    },(response:any)=>{
        if(response)    setImagePath(response.assets[0].uri)
        if(imagePath == '' || imagePath >'')
        setIsImage(true)
    })
    }
    const NullImageView = () => {
        return(
            <View>
                <Text style={{fontSize:32,
                    fontWeight:'bold',
                    color:Colors.BUTTON_SIGNUP,
                    opacity:0.8
                    }}>+</Text>
            </View>
        )
    }
    const SetedImageView = () => {
        return(
           
                <Image 
                    style={{flex:1,width:'100%',
                    height:125,
                    borderRadius:100,
                    borderWidth:0.2,
                    resizeMode:'cover'}}
                source={{uri:imagePath}}/>
           
            )
    }
    return(
        <View style={{flex:0.4,width:'70%',alignItems:"center"}}>
            <Pressable 
                style={{
                    width:'45%',
                    height:125,
                    borderRadius:100,
                    borderWidth:0.2,
                    borderColor:Colors.SEPARATED_LINE_TORNUP,
                    backgroundColor:Colors.ITEM_ARROW_GRAY,
                    alignItems:"center",
                    justifyContent:"center",
                }}
                onPress={onPressImagePicker}>
                {!isImage?<NullImageView/>:<SetedImageView/>}
            </Pressable>
        </View>
    )
}