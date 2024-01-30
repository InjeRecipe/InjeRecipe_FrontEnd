import React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"

const height = Dimensions.get('window').height
export function Header(){

    const styles = StyleSheet.create({
        container:{
            height:height*0.07,
            alignContent:"center",
            alignItems:"center",
            justifyContent:"center",
            borderWidth:1,
            borderRadius:20,
            width:"90%",
            alignSelf:"center"
        },
        titleText:{
            fontSize:22,
            fontWeight:'bold',
            
        }
    })
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>인제 레시피</Text>
        </View>
    )
}