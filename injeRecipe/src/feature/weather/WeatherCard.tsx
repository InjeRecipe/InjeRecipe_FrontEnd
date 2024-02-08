import React, { useEffect, useState } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { useLocation } from "../../hooks/useLocation";
import LottieView from "lottie-react-native";
import { url } from "inspector";

const hegiht = Dimensions.get('window').height
export function WeatherCard({ height }: any) {
    const { getNowLocation } = useLocation()
    useEffect(() => {
        getNowLocation()
    }, [])

    const [weather, setWeather] = useState('snow')
    const WeahterView = () => {
        if (weather == "snow") {
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
                                <Text>눈이 오는데 {'\n'}다음과 같은 레시피는 어때요?</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.67 }}>
                        <LottieView
                            style={{
                                flex: 1,
                                backgroundColor: 'black',
                                borderRadius:15}}
                            autoPlay
                            loop
                            source={require('/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/lottie/weather/weatherType2.json')}

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
        else { return (<View />) }
    }
    return (
        <View style={{
            height: height * 0.5,
            backgroundColor: 'white',
            borderColor: 'red',
            padding: 10
        }}>
            <WeahterView />
        </View>

    )
}