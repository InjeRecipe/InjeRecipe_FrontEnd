
import { SET_LOGINED_USER, SET_USER_WEATHER, SET_WEATHER_RECOMMEND_MENU } from "../action/actionLogin"

const data ={
    loginUser:null,
    userWeather:null,
    recommendMenu:null
}
export const loginReducer = (state = data,action:any) =>{
    
    switch(action.type){
        case SET_LOGINED_USER:{
            console.log('state',action.data)
            
            return {
                
                
                    ...state,
                    loginUser:action.data
                
            }
        }
        case SET_USER_WEATHER:{
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
    }
    return {...state}
}