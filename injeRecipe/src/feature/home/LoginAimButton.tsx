import React, { useRef } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { LoginButton } from "./LoginButton";
import { Margin } from "../../component/Margin";

export function LoginAimButton({ LoginIsExpanded, setLoginIsExpanded }: any) {
    const interpolate = useRef(new Animated.Value(0)).current
    const onPressClick = () => {
        Animated.timing(interpolate, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
            delay: 500
        }).start(() => { setLoginIsExpanded(!LoginIsExpanded) })
    }
    const onPressCancel = () => {
        Animated.timing(interpolate, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start(() => {  })
        setLoginIsExpanded(!LoginIsExpanded)
    }
    return (
        <>
            <Animated.View
                style={{
                    width: "100%",
                    alignItems: "center",
                    bottom:interpolate.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,57]
                    }),
                    height: 50
                    // interpolate.interpolate({
                    //     inputRange: [0, 1],
                    //     outputRange: [50, 200]
                    // })
                }}>
                {LoginIsExpanded ? null :
                    <Pressable
                        style={{
                            width: "75%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 18,
                            height: 50,
                            backgroundColor:"#A25426"
                        }}
                        onPress={onPressClick} >
                        <Text style={{
                             fontSize: 22,
                             color:"#FFFFFF" }}>로그인</Text>
                    </Pressable>}
                {LoginIsExpanded ?
                    <>
                        <LoginButton text={"로그인"} value={"signin"} />
                        <Margin height={10} />
                        <LoginButton text={"구글 계정을 통한 로그인"} value={"google"} />
                    </> : null
                }
                <Margin height={10}/>
                {LoginIsExpanded?
                <Pressable style={{
                    width:30,
                    height:30,
                    borderRadius:25,
                    borderWidth:2,
                    justifyContent:"center"}}
                    onPress={onPressCancel}
                    >
                    <Text style={{alignSelf:"center",fontWeight:'bold'}}>X</Text>
                </Pressable>:null}
            </Animated.View>
        </>
    )
}