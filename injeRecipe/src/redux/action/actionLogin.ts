export const SET_LOGINED_USER = "SET_LOGINED_USER"
export const SET_USER_WEATHER = "SET_USER_WEATHER"


export const setLoginedUser = (data:any) =>{
    console.log(data)
    return{
        type:SET_LOGINED_USER,
        data:data
    }

}


export const setUserWeather= (data:any) =>{
    console.log(data)
    return{
        type:SET_USER_WEATHER,
        data:data
    }

}