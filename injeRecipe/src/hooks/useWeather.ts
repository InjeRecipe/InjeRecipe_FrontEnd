export const useWeather = () =>{
    const weatherMessage = {
        snow:'눈이 오는데 \n 다음과 같은 \n 레시피는 어때요?',
        cloud:'날이 흐린데 \n다음과 같은 \n레시피는 어때요?',
        rain:'비도 오는데 \n다음과 같은 레시피는 어때요?',
        clear:'날씨가 맑은데 \n다음과 같은 레시피는 어때요?'
    }
    const weahterBackground ={
        snow:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/lottie/weather/weatherSnow.json',
        cloud:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/lottie/weather/weatherCloud.json',
        rain:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/lottie/weather/weatherRain.json',
        clear:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/lottie/weather/weatherClear.json'
    }
    const weatherdBackColor = {
        snow:'#363947',
        cloud:'#203A43',
        rain:'#2b5876',
        clear:''
    }
    const getWeatherState = (weather:string) =>{
        if(weather=="Clouds"){
            return{
                AiMessage:weatherMessage.cloud,
                BgColor:weatherdBackColor.cloud,
                ImageUri:weahterBackground.cloud
            }
            
        }
        else if(weather=='clear'){
            return{
                AiMessage:weatherMessage.clear,
                BgColor:weatherdBackColor.clear,
                ImageUri:weahterBackground.clear
            }
        }
        else if(weather=='rain'){
            return{
                AiMessage:weatherMessage.rain,
                BgColor:weatherdBackColor.rain,
                ImageUri:weahterBackground.rain
            }
        }
        else if(weather=='snow'){
            return{
                AiMessage:weatherMessage.snow,
                BgColor:weatherdBackColor.snow,
                ImageUri:weahterBackground.snow
            }
        }

        
    }

    return{
        getWeatherState,
    }
}