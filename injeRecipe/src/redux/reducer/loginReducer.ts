
import { SET_LOGINED_USER, SET_USER_WEATHER } from "../action/actionLogin"

const data ={
    loginUser:null,
    userWeather:null
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
    }
    return {...state}
}