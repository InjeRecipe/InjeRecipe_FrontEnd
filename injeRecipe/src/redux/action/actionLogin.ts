export const SET_LOGINED_USER = "SET_LOGINED_USER"
export const SET_USER_WEATHER = "SET_USER_WEATHER"
export const SET_WEATHER_RECOMMEND_MENU = "SET_WEATHER_RECOMMEND_MENU"
export const SET_WEATHER_RECIPE = "SET_WEATHER_RECIPE"
export const SET_KEYWORD_RECIPE = "SET_KEYWORD_RECIPE"
export const SET_USER_TOKEN = "SET_USER_TOKEN"
export const SET_USER_UPLOAD_BOARD = "SET_USER_UPLOAD_BOARD"

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

export const setWeatherRecommendMenu = (data:any) => {
    return{
        type:SET_WEATHER_RECOMMEND_MENU,
        data:data
    }
}

export const setWeatherRecipe = (data:any) => {
    return{
        type:SET_WEATHER_RECIPE,
        data:data
    }
}
export const setKeywordRecipe = ({data,kr}:any) => {
    return{
        type:SET_KEYWORD_RECIPE,
        data:data,
        krData:kr
    }
}

export const setUserToken = (data:any) => {
    
    return{
        type:SET_USER_TOKEN,
        data:data
    }
}

export const setUserUploadBoard = (data:any) => {
    return {
        type:SET_USER_UPLOAD_BOARD,
        data:data
    }
}