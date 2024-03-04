import React, { useEffect } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { InfoHeader } from "./InfoHeader";
import { useSelector } from "react-redux";
import { RootReducerState } from "../../redux/store";
import { url } from "inspector";
import { useNavigation } from "@react-navigation/core";
import { Colors } from "../../color/Colors";
import { useSignIn } from "../../hooks/useSignIn";

export function InfoView(){
    const userData = useSelector((state:RootReducerState)=> state.login.loginUser)
    const navigation = useNavigation<any>();
    const {googleSignOut} = useSignIn()
    useEffect(()=>{
        console.log('infoUserData',userData)
    })
    return(
        <SafeAreaView style={{flex:1}}>
                <View style={{height:50,borderWidth:1}}>
                    {/* header */}
                    <InfoHeader/>
                </View>
                <View style={{height:120,borderBottomWidth:1,flexDirection:'row'}}>
                    {/* header */}
                    <View style={{
                        flex:0.4,
                        alignItems:"center",
                        justifyContent:"center",
                        borderRightWidth:1
                        }}>
                        {/* image */}
                        <Image
                            style={{width:70,height:70,borderRadius:35}}
                            source={{uri:userData.user.photo}}
                        />
                    </View>
                    <View style={{
                        flex:0.6,
                        justifyContent:"center",
                        paddingHorizontal:20,
                    }}>
                        {/* recipe text */}
                        <Text style={{fontSize:17,marginBottom:10}}>{userData.user.name}</Text>
                        <Text style={{fontSize:15,marginBottom:10}}>나의 레시피 0</Text>
                    </View>
                    
                    {/* <View style={{borderWidth:1,borderRadius:25,}}>
                    </View> */}
                </View>
                
                    {/* flatlist로 대체 피드 형식으로? */}
                <Pressable style={{width:300,height:50,
                borderRadius:15,
                alignSelf:"center",
                marginTop:20,borderWidth:0.5,
                justifyContent:"center",
                borderColor:Colors.SEPARATED_LINE_TORNUP}} onPress={()=>{
                    googleSignOut().then(()=>{
                        setTimeout(()=>{

                        },1000)
                        
                        navigation.navigate("Home")
                    })
                    
                    }}>
                        <Text style={{fontSize:22,alignSelf:"center"}}>로그아웃</Text>
                    </Pressable>
    
        </SafeAreaView>
    )
}