import React, { useEffect, useState } from "react"
import { Image, Pressable, StyleSheet, Text } from "react-native"
import { useSignIn } from "../../hooks/useSignIn"
import { useNavigation } from "@react-navigation/native"
import { GoogleSigninButton } from "@react-native-google-signin/google-signin"
import { url } from "inspector"
import { useDispatch, useSelector } from "react-redux"
import { setKeywordRecipe, setLoginedUser, setUserToken, setUserUploadBoard, setUserWeather, setWeatherRecipe } from "../../redux/action/actionLogin"
import { signService } from "../../services/signService"
import Geolocation from "@react-native-community/geolocation"
import { RootReducerState } from "../../redux/store"
import { weatherService } from "../../services/weatherService"
import { chatGptService } from "../../services/chatGptService"
import { recipeService } from "../../services/recipeService"
import { LoadingIndicaotrView } from "../../component/LoadingIndicatorView"


type props ={
    text:string,
    value:string
}
export function LoginButton({text,value,id,pw}:any){
    const {
        googleSigninConfigure,
        onPressGoogleSignIn
    } = useSignIn()
    const [btBgColor,setBtBgColor] = useState('')
    const [isLoginedGoogle,setIsLoginedGoogle] = useState(false)
    const dispatch = useDispatch()
    const {POST_SIGNIN} = signService()
    const navigation = useNavigation<any>()
    const token = useSelector((state:RootReducerState)=>state.login.userToken)
    const [weather, setWeather] = useState<any>('')
    const {POST_WEATHER} = weatherService()
    const {GET_RECIPE_WEHATER,GET_KEYWORD_RECIPE} = chatGptService()
    const {GET_SERACH_RECIPES,POST_USER_UPLOAD_RECIPE} = recipeService()
    const [flag,setFlag] = useState(false)
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        if(text == "구글 계정을 통한 로그인"){
            setBtBgColor('white')           
        }
        else{
            setBtBgColor ('#A25426')
        }
    },[text])
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
   const getRecipeApi = async(weather:any) => {
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
    const userUploadRecipe = () => {
        POST_USER_UPLOAD_RECIPE(token).then((res:any)=>{
            dispatch(setUserUploadBoard(res.data))
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
    const onPressLogin = () =>{
        console.log("???")
        if(value == "signin"){
            navigation.navigate('HomeStack',{screen:'SignIn'})}
        else if(value=="inje"){
            POST_SIGNIN({id,pw}).then((res:any)=>{
                console.log('@@@@@@@@@@@@@@@@',res)
                dispatch(setUserToken(res.token))
                
             })
             const data ={
                "idToken": "e",
                 "scopes": ["https://www.googleapis.com/auth/userinfo.email",
                  "https://www.googleapis.com/auth/userinfo.profile",
                   "openid"],
                    "serverAuthCode": null,
                     "user": {
                        "email": "woals8115@gmail.com",
                        "familyName": "김",
                        "givenName": "재민",
                         "id": "110134254187707080870",
                          "name": "test1",
                           "photo": "/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/userProfile.png"}
             }
        dispatch(setLoginedUser(data))
        setTimeout(()=>{
            setLoading(true)
            userUploadRecipe()
            keywordRecipe()
            
            getNowLocation()    
        },500)
       
    }
        
        
        else if(value =="google"){
            const getUserData = async() => {
                const res = await onPressGoogleSignIn()
                // res 요 녀석을 전역 스테이트로 관리하면 오케이
                if(res!=undefined){
                    dispatch(setLoginedUser(res))
                    navigation.navigate('Bottom')
                }
            }
            getUserData()
        }
    }
    return(
        <Pressable 
            style={{
                width:"75%",
                alignItems:"center",
                justifyContent:"center",
                height:50,
                borderRadius:18,
                backgroundColor:btBgColor,
                shadowOpacity:1,
                shadowOffset:{width:0,height:2},
                flexDirection:'row'}}
            onPress={onPressLogin}>
        {btBgColor=='white'?
        <Image 
            style={{width:20,height:20,marginRight:10}}
            source={{uri:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/googleIcon.png'}}/>:null}
            <Text style={{fontSize:22,color:btBgColor=='white'?'black':'white'}}>{text}</Text>
            {loading?<LoadingIndicaotrView/>:null}    
        </Pressable>
        
    )
}