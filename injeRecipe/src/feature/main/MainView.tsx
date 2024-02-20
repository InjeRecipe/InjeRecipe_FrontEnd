import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, PanResponder, SafeAreaView, ScrollView, Text, View } from "react-native";
import { WeatherCard } from "./weather/WeatherCard";
import { Header } from "../../component/Header";
import { Margin } from "../../component/Margin";
import { Colors } from "../../color/Colors";
import { useDimention } from "../../hooks/useDimension";
import { MainHeaderAnim } from "./MainHeaderAnim";
import { useSelector } from "react-redux";
import { RootReducerState } from "../../redux/store";
import { useWeather } from "../../hooks/useWeather";
import LottieView from "lottie-react-native";
import { WeatherRecommendView } from "./WeatherRecommendView";

export function MainView() {

    const { getHeight } = useDimention()
    const height = getHeight()
    const { getWeatherState } = useWeather()
    const [bgColor, setBgColor] = useState<string | undefined>('')
    const [imageUri, setImageUri] = useState<any>('')
    const [aiMessage, setAiMessage] = useState<string | undefined>('')

    const weather = useSelector((state: RootReducerState) => state.login.userWeather)


    useEffect(() => {
        console.log(weather)
        const data = getWeatherState(weather)
        setBgColor(data?.BgColor)
        setAiMessage(data?.AiMessage)
        setImageUri(data?.ImageUri)

    }, [])
    const ViewOriginal = () => {
        return (
            <>
                <View style={{ flex: 0.1 }}>
                    {/* Header */}
                    <Header />
                </View>
                <ScrollView style={{ flex: 0.9, }}>
                    <View style={{ flex: 0.5, borderColor: 'blue' }}>
                        {/* recomend Ai Recipe */}
                        <View style={{ flex: 0.1, paddingHorizontal: 10 }}>
                            <Text style={{ marginTop: 5, fontWeight: 'bold', fontSize: 20 }}>추천 레시피</Text>
                        </View>
                        <View style={{ flex: 0.9 }}>
                            <WeatherCard height={10} />
                        </View>
                    </View>
                    <View style={{ flex: 0.45, borderWidth: 1 }}>
                        {/* popular recipe */}
                        <View style={{ flex: 0.1, paddingHorizontal: 10 }}>
                            <Text style={{ marginTop: 5, fontWeight: 'bold', fontSize: 20 }}>인기 레시피</Text>
                        </View>
                        <View style={{ flex: 0.9 }}>

                        </View>
                    </View>
                </ScrollView></>
        )
    }
    const fadeTitleAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const handleScroll = (event:any) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        // 최대 스크롤 가능한 높이 (예: 500)
        const maxScrollHeight = 500;
        // 투명도 계산
        const opacity = 1 - (scrollY / maxScrollHeight);
        const titleOpacity =(scrollY / maxScrollHeight)
        // Animated API를 사용하여 투명도 업데이트
        const anims = [
        Animated.timing(
            fadeAnim,
            {
                toValue: opacity,
                duration: 0, // 애니메이션 지속 시간 (0으로 설정하여 즉시 업데이트)
                useNativeDriver: false, // 네이티브 드라이버 사용 여부
            }),
        Animated.timing(
            fadeTitleAnim,
            {
                toValue: titleOpacity,
                duration: 0, // 애니메이션 지속 시간 (0으로 설정하여 즉시 업데이트)
                useNativeDriver: false, // 네이티브 드라이버 사용 여부
            })]
            Animated.parallel(anims).start();     
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={{
                height: 50,
                
            }}>
            </View>
            <Animated.View style={{
                flex: 0.05,
                opacity:fadeTitleAnim,
                alignItems:'center',
                justifyContent: 'center',
                flexDirection:'row',
                
            }}>
                <View style={{position:"absolute",right:40}}>
                <LottieView
                            style={{ width: 50, height: 50, }}
                            autoPlay
                            source={{ uri: imageUri }} />
                </View>
                <View>
                    
                </View>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>인제 레시피</Text>
            </Animated.View>
            <ScrollView
                style={{ flex: 0.95, }}
                bounces={false}
                onScroll={handleScroll}
                scrollEventThrottle={1}>
                <Animated.View
                    style={{
                        opacity:fadeAnim,
                        height: height * 0.5,
                        borderBottomWidth: 1,
                        borderColor: Colors.SEPARATED_LINE,
                        backgroundColor:bgColor
                    }}>
                    <View style={{
                        flex: 0.5,
                        paddingHorizontal: 40,
                        alignItems: "flex-end",
                        flexDirection: 'row',
                        paddingVertical: 30
                    }}>
                        <View style={{ backgroundColor:bgColor,width:'100%',borderRadius:20}}>
                        <LottieView
                            style={{ width: 100, height: 120, }}
                            autoPlay
                            source={{ uri: imageUri }} />
                        </View>
                       

                    </View>
                    <View style={{
                        flex: 0.5,
                        paddingHorizontal: 40,
                        alignItems: "flex-end",
                        flexDirection: 'row',
                        paddingVertical: 30
                    }}>
                        <Text style={{ fontSize: 30, }}>
                            {aiMessage}
                        </Text>
                    </View>
                </Animated.View>
                <View style={{ height: 690,borderWidth:1}}>
                <WeatherRecommendView/>
                </View>
                <View style={{ height: 800 }}>
                    
                </View>
            </ScrollView>


        </View>
    )
}