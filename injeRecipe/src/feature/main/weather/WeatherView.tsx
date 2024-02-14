import React, { useEffect, useState } from "react"
import LottieView from "lottie-react-native"
import { Image, Text, View } from "react-native"

export const WeahterView = ({weather}:any) => {
    
    const weatherMessage = {
        snow:'눈이 오는데 \n 다음과 같은 레시피는 어때요?',
        cloud:'날이 흐린데 \n 다음과 같은 레시피는 어때요?',
        rain:'비도 오는데 \n 다음과 같은 레시피는 어때요?',
        clear:'날씨가 맑은데 \n 다음과 같은 레시피는 어때요?'
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
    const [bgColor,setBgColor] =useState<string>('')
    const [imageUri,setImageUri] = useState<string>('')
    const [aiMessage,setAiMessage] = useState<string>('')

    useEffect(()=>{
        if(weather=="Clouds"){
            setAiMessage(weatherMessage.cloud)
            setBgColor(weatherdBackColor.cloud)
            setImageUri(weahterBackground.cloud)
        }
        else if(weather=='clear'){
            setAiMessage(weatherMessage.clear)
            setBgColor(weatherdBackColor.clear)
            setImageUri(weahterBackground.clear)
        }
        else if(weather=='rain'){
            setAiMessage(weatherMessage.rain)
            setBgColor(weatherdBackColor.rain)
            setImageUri(weahterBackground.rain)
        }
        else if(weather=='snow'){
            setAiMessage(weatherMessage.snow)
            setBgColor(weatherdBackColor.snow)
            setImageUri(weahterBackground.snow)
        }
    })
        return (
            <View style={{flex:1}}>
                <View style={{ flex: 0.23, flexDirection: 'row', paddingHorizontal: 5 }}>
                    <View style={{ flex: 0.25 }}>
                        <Image
                            style={{ width: 75, height: 75, borderRadius: 20, backgroundColor: '#32121250' }}
                            source={{ uri: '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/shefCharacter.png' }}/>
                    </View>
                    <View style={{ flex: 0.75, padding: 10 }}>
                        <View style={{
                            borderWidth: 1,
                            borderRadius: 10,
                            flex: 1,
                            padding: 5}}>
                            <Text>{aiMessage}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.67,borderWidth:1,backgroundColor:bgColor,borderRadius:15 }}>
                    <LottieView
                        style={{
                            flex:1,
                            backgroundColor: bgColor,
                            borderRadius:15}}
                        autoPlay
                        loop
                        source={{uri:imageUri}}

                    />
                    {/* 플랫리스트 고정값으로 넣고 아이템 해당 밸류로 채우기 */}
                    <View style={{
                        position: 'absolute',
                        width: 150,
                        height: 200,
                        backgroundColor: 'white',
                        left: 25,
                        top: 40,
                        borderRadius:7
                    }}>
                    </View>
                </View>
            </View>
        )
    }