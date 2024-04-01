import LottieView from "lottie-react-native";
import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Margin } from "../../component/Margin";
import { SignUpButton } from "./SignUpButton";
import { LoginAimButton } from "./LoginAimButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useSignIn } from "../../hooks/useSignIn";
import { setKeywordRecipe, setLoginedUser, setUserToken, setUserUploadBoard, setUserWeather, setWeatherRecipe, setWeatherRecommendMenu } from "../../redux/action/actionLogin";
import Geolocation from "@react-native-community/geolocation";
import { weatherService } from "../../services/weatherService";
import { chatGptService } from "../../services/chatGptService";
import { recipeService } from "../../services/recipeService";
import { signService } from "../../services/signService";
import { RootReducerState } from "../../redux/store";
import { LoadingIndicaotrView } from "../../component/LoadingIndicatorView";

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
    const {GET_SERACH_RECIPES,POST_USER_UPLOAD_RECIPE} = recipeService()
    const {POST_SIGNIN} = signService()
    // state
    const [LoginIsExpanded, setLoginIsExpanded] = useState(false)
    const [weather, setWeather] = useState<any>('')
    const [isSignedInGoogle, setIsSignedInGoogle] = useState<boolean>()
    const [getCurrentData,setGetCurrentData] = useState<boolean>()
    const [loading, setLoading] = useState(false);
    const token = useSelector((state:RootReducerState)=>state.login.userToken)
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
            lon:data.coords.longitude+"",
            token:token
        }
        
        POST_WEATHER(postData).then((res)=>{
            setWeather(res.weather[0].main) 
            // gpt asked need 
            dispatch(setUserWeather(res.weather[0].main))
            // 날씨에 맞는 레시피까지 받아옴
            setTimeout(()=>{
                getRecipeApi(res.weather[0].main)
            },500)
            
            
                
        })
       })   
      
   }
   const getRecipeApi = async(weathers:any) => {
     GET_RECIPE_WEHATER(
        weather,
        token).then((res:any)=>{
            console.log(typeof res.menu[0])
            const postData = {
                keywords:[
                res.menu[0],
                res.menu[1],
                res.menu[2],
                res.menu[3],
                res.menu[4],
                res.menu[5],
                res.menu[6],
                res.menu[7],
            ]}
        GET_SERACH_RECIPES(
            {  data:postData,
                token:token}).then((result)=>{
               
               dispatch(setWeatherRecipe(result.data))
           })
    })   
}
const keywordRecipe = () => {
    GET_KEYWORD_RECIPE(token).then((keywordRes)=>{
    const postData = {
      keywords:  [
        keywordRes.kr.menu[0],
        keywordRes.kr.menu[1],
        keywordRes.kr.menu[2],
        keywordRes.kr.menu[3],
        keywordRes.kr.menu[4],
        keywordRes.kr.menu[5],
        keywordRes.kr.menu[6],
        keywordRes.kr.menu[7],
    ]}
    console.log('GET_KEYWORD_RECIPE()',postData)
    GET_SERACH_RECIPES({
        data:postData,
        token:token}).then((res)=>{
        dispatch(setKeywordRecipe({
            data:keywordRes,
            kr:res.data}))
        setLoading(false);
        navigation.navigate('Bottom')
        })
})
}
const userUploadRecipe = () => {
    POST_USER_UPLOAD_RECIPE(token).then((res:any)=>{
        dispatch(setUserUploadBoard(res.data))
    })
}
    useEffect(() => {
        googleSigninConfigure()
        getIsSignedIn()
    },[])
    useEffect(()=>{
        if (isSignedInGoogle) {
            getCurrentGoogleUser()
        }
    },[isSignedInGoogle])
   
    useEffect(()=>{
        if(getCurrentData!=null && token!=null){
            setLoading(true)
            userUploadRecipe()
            keywordRecipe()
            
            getNowLocation()    
        }
       
    },[token])

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
               
            </View>
            <View style={styles.buttonSection}>
                {/* button section */}
                <Margin height={30} />
                <SignUpButton LoginIsExpanded={LoginIsExpanded} />
                <Margin height={10} />
                <LoginAimButton
                userUploadRecipe={userUploadRecipe}
                keywordRecipe={keywordRecipe}
                
                getNowLocation={getNowLocation}  
                    LoginIsExpanded={LoginIsExpanded}
                    setLoginIsExpanded={setLoginIsExpanded} />
            </View>
            {loading?<LoadingIndicaotrView text="레시피 제작중"/>:null}
        </SafeAreaView>
    )

}