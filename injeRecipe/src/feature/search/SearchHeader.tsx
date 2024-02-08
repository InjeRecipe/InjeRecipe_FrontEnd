import React from "react";
import { Text, View } from "react-native";
import { Colors } from "../../color/Colors";


export function SearchHeader(){
    return(
        <View style={{
            flex:1,
            borderWidth:1,
            backgroundColor:Colors.BUTTON_SIGNIN,
            alignItems:'flex-start',
            justifyContent:'center',
            paddingHorizontal:20
            }}>
            <Text style={{
                color:Colors.FONT_WHITE,
                fontSize:18,
                fontWeight:'bold'}}>검색</Text>
        </View>
    )
}