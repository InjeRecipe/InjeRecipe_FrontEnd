import LottieView from "lottie-react-native";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GoogleAuthButton } from "../../screens/signin/google/GoogleAuthButton";

export function HomeView () {
    const styles = StyleSheet.create({
        container:{
            flex:1,
        },
        header:{
            flex:0.25,
            alignContent:'center',
            justifyContent:'center',
            alignSelf:'center'
        },
        buttonSection:{
            flex:0.2,
            alignContent:'center',
            justifyContent:'center',
            alignSelf:'center'
        }
    })
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                {/* Image logo section */}
                <Image
                resizeMode="center"
                 style={{
                    flex:1,
                    
                 }}
                 source={require("/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/LogoImage.png")}/>
            </View>
        <View style={{flex:0.55}}>
            {/* lottie logo section */}
             <LottieView
      source={require("/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/lottie/LottieLogo.json")}
      style={{width: "100%", height: "90%",marginTop:-50}}
      autoPlay
      loop
    />
        </View>
        <View style={styles.buttonSection}>
            {/* button section */}
            <GoogleAuthButton/>
        </View>
        </SafeAreaView>
    )
    
}