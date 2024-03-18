
import { SET_KEYWORD_RECIPE, SET_LOGINED_USER, SET_USER_TOKEN, SET_USER_WEATHER, SET_WEATHER_RECIPE, SET_WEATHER_RECOMMEND_MENU } from "../action/actionLogin"

const data ={
    loginUser:null,
    userWeather:null,
    recommendMenu:null,
    weatherRecipe:null,
    defaultKrRecipe:null,
    keywordRecipe:null,
    userToken:null
}
export const loginReducer = (state = data,action:any) =>{
    
    switch(action.type){
        case SET_LOGINED_USER:{
            //로그인 유저 정보 저장
            console.log('state',action.data)
            
            return {
                    ...state,
                    loginUser:action.data
                
            }
        }
        case SET_USER_WEATHER:{
            //로그인 유저 날씨 정보 저장
            return{
                
                    ...state,
                    userWeather:action.data
                    
                
            }
        }
        case SET_WEATHER_RECOMMEND_MENU:{
            return{
                ...state,
                recommendMenu:action.data
            }
        }
        case SET_WEATHER_RECIPE:{
            //로그인 유저 날씨에 맞는 레시피 저장
            return{
                ...state,
                weatherRecipe:action.data
            }
        }
        
        case SET_KEYWORD_RECIPE:{
            console.log('#########',action.krData)
            //키워드에 적당한 레시피 저장
            return{
                ...state,
                keywordRecipe:action.data,
                defaultKrRecipe:action.krData
            }
        }
        case SET_USER_TOKEN:{
            //로그인시 사용자 토큰 저장
            return{
                ...state,
                userToken:action.data
            }
        }

    }
    return {...state}
}