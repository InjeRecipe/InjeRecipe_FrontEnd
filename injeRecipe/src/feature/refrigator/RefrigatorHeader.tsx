import React from "react";
import { Pressable, Text, View } from "react-native";
import { Colors } from "../../color/Colors";
import Icon from 'react-native-vector-icons/Ionicons'

export function RefrigatorHeader(){
    return(
        <View style={{
            flex:1,
            backgroundColor:Colors.BUTTON_SIGNIN,
            alignItems:'flex-start',
            justifyContent:'center',
            paddingHorizontal:20,
            flexDirection:"row",
            }}>
                <View style={{flex:0.9,
                    height:'100%',
                    justifyContent:"center",
                    }}>
            <Text style={{
                color:Colors.FONT_WHITE,
                fontSize:18,
                fontWeight:'bold'}}>나의 냉장고</Text>
                </View>
            <Pressable style={{
                width:27,
                height:27,
            
                alignSelf:'center',
                    justifyContent:"center",
                    backgroundColor:Colors.SEPARATED_LINE,
                    alignItems:"center",
                    borderRadius:80
                    }}>
                <Icon name="add" size={20} />
            </Pressable>
        </View>
    )
}