import React from "react"
import { Text, View } from "react-native"
import  Icon  from "react-native-vector-icons/Ionicons"
import { Colors } from "../../color/Colors"

export const InfoHeader =()=>{
    
    return(
        <View style={{
            justifyContent:"center",
            paddingHorizontal:10,
            flex:1,
            alignItems:"center",
            flexDirection:'row',
            backgroundColor:Colors.BUTTON_SIGNIN
            }}>
            <View style={{flex:0.8}}>
            <Text style={{fontSize:18,fontWeight:'bold',color:Colors.FONT_WHITE}}>더보기</Text>
            </View>
            <View>
            {/* <Icon name="list"size={16} color={Colors.FONT_WHITE}/> */}
            </View>
            
        </View>
    )
}