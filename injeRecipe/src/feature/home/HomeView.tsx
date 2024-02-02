import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GoogleAuthButton } from "../../screens/signin/google/GoogleAuthButton";
import { useRootNavigation } from "../../navigations/RootStackNavigation";
import { LoginButton } from "./LoginButton";
import { Margin } from "../../component/Margin";
import { SignUpButton } from "./SignUpButton";
import { LoginAimButton } from "./LoginAimButton";

export function HomeView() {
    const navigation = useRootNavigation()
    const [LoginIsExpanded,setLoginIsExpanded] = useState(false)
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        header: {
            flex: 0.25,
            alignContent: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
        },
        buttonSection: {
            flex: 0.2,
            width:"100%",
            alignContent: 'center',
            justifyContent: 'center',
            alignItems:"center",
            
        },
        buttonStyle:{
            width:"75%",
            borderWidth:1,
            alignItems:"center",
            justifyContent:"center",
            height:50,
            borderRadius:18
        }
    })
    const onPressLogin = () =>{
        navigation.navigate("Bottom")

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                {/* Image logo section */}
                <Image
                    resizeMode="center"
                    style={{flex: 1,}}
                    source={require("/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/LogoImage.png")} />
            </View>
            <View style={{ flex: 0.55 }}>
                {/* lottie logo section */}
                <LottieView
                    source={require("/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/lottie/LottieLogo.json")}
                    style={{ width: "100%", height: "90%", marginTop: -50 }}
                    autoPlay
                    loop/>
                    <Pressable onPress={onPressLogin} 
                style={{borderWidth:1,alignItems:"center"}}>
                    <Text style={{fontSize:18}}>화면전환용 로그인</Text>
                </Pressable> 
            </View>
            <View style={styles.buttonSection}>
                {/* button section */}
                {/* 구글 로그인 로그인 등 컴포넌트화 시키기 */}
                {/* <GoogleAuthButton /> */}
                <Margin height={30}/>
                <SignUpButton LoginIsExpanded={LoginIsExpanded}/>
                <Margin height={10}/>
                <LoginAimButton 
                    LoginIsExpanded ={LoginIsExpanded}
                    setLoginIsExpanded={setLoginIsExpanded}/>
            </View>
        </SafeAreaView>
    )

}