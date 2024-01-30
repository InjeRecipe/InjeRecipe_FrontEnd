import LottieView from "lottie-react-native";
import React from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GoogleAuthButton } from "../../screens/signin/google/GoogleAuthButton";
import { useRootNavigation } from "../../navigations/RootStackNavigation";
import { LoginButton } from "../main/LoginButton";
import { Margin } from "../../component/Margin";

export function HomeView() {
    const navigation = useRootNavigation()
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
            alignItems:"center"
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
            </View>
            <View style={styles.buttonSection}>
                {/* button section */}
                {/* 구글 로그인 로그인 등 컴포넌트화 시키기 */}
                <GoogleAuthButton />
                <Pressable onPress={onPressLogin}>
                    <Text>로그인</Text>
                </Pressable> 
                <LoginButton text={"구글 계정을 통한 로그인"}/>
                <Margin height={10}/>
                <LoginButton text={"로그인"}/>
            </View>
        </SafeAreaView>
    )

}