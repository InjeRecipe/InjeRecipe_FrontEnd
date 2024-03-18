import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Margin } from "../../component/Margin";
import { SignUpButton } from "./SignUpButton";
import { LoginAimButton } from "./LoginAimButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useSignIn } from "../../hooks/useSignIn";
import { setKeywordRecipe, setLoginedUser, setUserToken, setUserWeather, setWeatherRecipe, setWeatherRecommendMenu } from "../../redux/action/actionLogin";
import Geolocation from "@react-native-community/geolocation";
import { weatherService } from "../../services/weatherService";
import { useWeather } from "../../hooks/useWeather";
import { chatGptService } from "../../services/chatGptService";
import { recipeService } from "../../services/recipeService";
import { sampleData } from "../../data/sampleData";
import { signService } from "../../services/signService";

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
    const {GET_RECIPE_WEHATER,GET_KEYWORD_RECIPE} = chatGptService()
    const {GET_SERACH_RECIPES,GET_SERACH_RECIPE,} = recipeService()
    const {POST_SIGNIN} = signService()
    // state
    const [LoginIsExpanded, setLoginIsExpanded] = useState(false)
    const [weather, setWeather] = useState<any>()
    const [isSignedInGoogle, setIsSignedInGoogle] = useState<boolean>()
    const [getCurrentData,setGetCurrentData] = useState<boolean>()
    const [first,setFirst] = useState(0)
    const getIsSignedIn = async () => {
        const result = await isSignedIn()
        console.log(result)
        setIsSignedInGoogle(result)
    }

    const getCurrentGoogleUser = async () => {
        const data = await getCurrentUser()
        
        if(data ==null) setGetCurrentData(false)
        else {
    
            setGetCurrentData(true)
            POST_SIGNIN({
                 id:data.user.email,
                 pw:'test1234'}).then((res:any)=>{
                    console.log('@@@@@@@@@@@@@@@@',res)
                    dispatch(setUserToken(res.token))
                 })
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
            console.log('weather',weather)
            // 날씨에 맞는 레시피까지 받아옴
            getRecipeApi(weather)
            setTimeout(()=>{navigation.navigate('Bottom')},5000)
        })
       })   
      
   }
   const getRecipeApi = async(weather:any) => {
     GET_RECIPE_WEHATER(weather).then((res:any)=>{
        
        const postData = {
            keyword1:res.menu[0],
            keyword2:res.menu[1],
            keyword3:res.menu[2],
            keyword4:res.menu[3],
            keyword5:res.menu[4],
            keyword6:res.menu[5],
            keyword7:res.menu[6],
            keyword8:res.menu[7],
        }
        GET_SERACH_RECIPES(postData).then((res:any)=>{
            console.log("@@@@@@res@@@@@@@",res)
            dispatch(setWeatherRecipe(res.data))
        })

    })   
}
const keywordRecipe = () => {
    GET_KEYWORD_RECIPE().then((keywordRes)=>{
    console.log('GET_KEYWORD_RECIPE()',keywordRes)
    const postData = {
        keyword1:keywordRes.kr.menu[0],
        keyword2:keywordRes.kr.menu[1],
        keyword3:keywordRes.kr.menu[2],
        keyword4:keywordRes.kr.menu[3],
        keyword5:keywordRes.kr.menu[4],
        keyword6:keywordRes.kr.menu[5],
        keyword7:keywordRes.kr.menu[6],
        keyword8:keywordRes.kr.menu[7],
    }
    GET_SERACH_RECIPES(postData).then((res)=>{
        dispatch(setKeywordRecipe({
            data:keywordRes,
            kr:res.data}))
    })
})
}
    useEffect(() => {
        googleSigninConfigure()
        getIsSignedIn()
        keywordRecipe()
        if (isSignedInGoogle) {
            console.log('??')
            getCurrentGoogleUser()
            if(getCurrentData){
                console.log('??')
                //getNowLocation()    
            }
        }
    },[getNowLocation,])

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