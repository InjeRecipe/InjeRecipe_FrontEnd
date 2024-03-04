import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Margin } from "../../component/Margin";
import { SignUpButton } from "./SignUpButton";
import { LoginAimButton } from "./LoginAimButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useSignIn } from "../../hooks/useSignIn";
import { setLoginedUser, setUserWeather, setWeatherRecommendMenu } from "../../redux/action/actionLogin";
import Geolocation from "@react-native-community/geolocation";
import { weatherService } from "../../services/weatherService";
import { useWeather } from "../../hooks/useWeather";
import { chatGptService } from "../../services/chatGptService";

export function HomeView() {
    // hooks
    const navigation = useNavigation<any>()
    const dispatch = useDispatch()
    const {
        isSignedIn,
        googleSigninConfigure,
        getCurrentUser
    } = useSignIn()
    // api
    const {POST_WEATHER} = weatherService()
    const {GET_RECIPE_WEHATER} = chatGptService()
    // state
    const [LoginIsExpanded, setLoginIsExpanded] = useState(false)
    const [weather, setWeather] = useState<any>()
    const [isSignedInGoogle, setIsSignedInGoogle] = useState<boolean>()
    const [getCurrentData,setGetCurrentData] = useState<boolean>()

    const getIsSignedIn = async () => {
        const result = await isSignedIn()
        
        setIsSignedInGoogle(result)
    }

    const getCurrentGoogleUser = async () => {
        const data = await getCurrentUser()
        
        if(data ==null) setGetCurrentData(false)
        else {setGetCurrentData(true)
            dispatch(setLoginedUser(data))}
 
    }
    const getNowLocation = ()=> {
        Geolocation.getCurrentPosition(data => {
           const postData= {
            lat:data.coords.latitude+"",
            lon:data.coords.longitude+""
        }
       
        POST_WEATHER(postData).then((res)=>{
            console.log('POSTWEATHER',res.weather[0].main)
            setWeather(res.weather[0].main) 
            console.log('------------',res.weather[0].main) 
            // gpt asked need 
            dispatch(setUserWeather(weather))
           
            
        })
           setTimeout(()=>{
            // spinner 추가 필요
            navigation.navigate('Bottom')
        },1000)
       })   
   }
   const getRecommendMenu = () =>{
    GET_RECIPE_WEHATER(weather).then((res)=>{
                
        dispatch(setWeatherRecommendMenu(res))
        
    })
   }
    useEffect(() => {
        googleSigninConfigure()
        getIsSignedIn()
        if (isSignedInGoogle) {
            getCurrentGoogleUser()
            if(getCurrentData){
                getRecommendMenu()
                getNowLocation()
        }
        }
    })

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
            width: "100%",
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: "center",

        },
        buttonStyle: {
            width: "75%",
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            borderRadius: 18
        }
    })
    const onPressLogin = () => {
        navigation.navigate("Bottom")

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                {/* Image logo section */}
                <Image
                    resizeMode="center"
                    style={{ flex: 1, }}
                    source={require("/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/LogoImage.png")} />
            </View>
            <View style={{ flex: 0.55 }}>
                {/* lottie logo section */}
                <LottieView
                    source={require("/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/lottie/LottieLogo.json")}
                    style={{ width: "100%", height: "90%", marginTop: -50 }}
                    autoPlay
                    loop />
                <Pressable onPress={onPressLogin}
                    style={{ borderWidth: 1, alignItems: "center" }}>
                    <Text style={{ fontSize: 18 }}>화면전환용 로그인</Text>
                </Pressable>
            </View>
            <View style={styles.buttonSection}>
                {/* button section */}
                {/* 구글 로그인 로그인 등 컴포넌트화 시키기 */}
                {/* <GoogleAuthButton /> */}
                <Margin height={30} />
                <SignUpButton LoginIsExpanded={LoginIsExpanded} />
                <Margin height={10} />
                <LoginAimButton
                    LoginIsExpanded={LoginIsExpanded}
                    setLoginIsExpanded={setLoginIsExpanded} />
            </View>
        </SafeAreaView>
    )

}