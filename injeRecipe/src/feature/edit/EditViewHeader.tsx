import React from "react"
import { Pressable, Text, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native"
export const EditViewHeader = () => {
    const { getHeight } = useDimention()
    const navigation = useNavigation<any>()
    const onPressNext = () => {
        
    }
    const onPressPrev = () => {
        navigation.pop()
    }
    return (
        <View style={{ 
            height: getHeight() * 0.06,
            backgroundColor: Colors.BUTTON_SIGNIN,
            alignItems:"center",
            justifyContent:"center",
            flexDirection:'row'
            }}>
                <Pressable style={{
                    flex:0.15,
                    width:'100%',
                    alignItems:"center"}}
                    onPress={onPressPrev}>
                    <Icon size={16} color='white' name="chevron-back"/>
                </Pressable>
                <View style={{flex:0.7,alignItems:"center"}}>
                    <Text style={{
                        color:Colors.FONT_WHITE,
                        fontSize:18,
                        fontWeight:'bold'}}>레시피 작성하기</Text>        
                </View>
                <View style={{
                    flex:0.15,
                    width:'100%',
                    alignItems:"center"}}>
                    <Text style={{color:'white',fontSize:15}}>완료</Text>
                </View>
            
        </View>
    )
}