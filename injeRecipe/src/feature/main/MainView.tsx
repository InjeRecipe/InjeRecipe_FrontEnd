import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, PanResponder, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { WeatherCard } from "./weather/WeatherCard";
import { Header } from "../../component/Header";
import { Margin } from "../../component/Margin";
import { Colors } from "../../color/Colors";
import { useDimention } from "../../hooks/useDimension";

import { useSelector } from "react-redux";
import { RootReducerState } from "../../redux/store";
import { useWeather } from "../../hooks/useWeather";
import LottieView from "lottie-react-native";
import { WeatherRecommendView } from "./WeatherRecommendView";
import { KeyWordRecommendView } from "./KeyWordRcommendView";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";
import { UserRecipeView } from "./UserRecipeView";
import { LoadingIndicaotrView } from "../../component/LoadingIndicatorView";

export function MainView() {

    const { getHeight } = useDimention()
    const height = getHeight()
    const { getWeatherState } = useWeather()
    const navigation = useNavigation<any>();
    const [bgColor, setBgColor] = useState<string | undefined>('')
    const [imageUri, setImageUri] = useState<any>('')
    const [aiMessage, setAiMessage] = useState<string | undefined>('')
    const [weatherTitle,setWeatherTitle] = useState<string|any> ('')
    const weather = useSelector((state: RootReducerState) => state.login.userWeather)
    const weatherRecipe = useSelector((state: RootReducerState) => state.login.weatherRecipe)
    const [isLoding,setIsLoading] = useState(false)

    useEffect(() => {
        console.log(weather)
        const data = getWeatherState(weather)
        setBgColor(data?.BgColor)
        setAiMessage(data?.AiMessage)
        setImageUri(data?.ImageUri)
        setWeatherTitle(data?.title)
    }, [])

    const fadeTitleAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const handleScroll = (event: any) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        // 최대 스크롤 가능한 높이 (예: 500)
        const maxScrollHeight = 500;
        // 투명도 계산
        const opacity = 1 - (scrollY / maxScrollHeight);
        const titleOpacity = (scrollY / maxScrollHeight)
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
    const onPressCreateRecipe = () => {
        navigation.navigate('EditStack', { screen: 'EditInfoView' })
    }
    const AnimatedHeader = () => {
        return (
            <Animated.View style={{
                flex: 0.05,
                opacity: fadeTitleAnim,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
            }}>
                <View style={{ position: "absolute", left: 40 }}>
                    <LottieView
                        style={{ width: 45, height: 45, }}
                        autoPlay
                        source={{ uri: imageUri }} />

                </View>
                <Pressable
                    style={{ position: "absolute", right: 40 }}
                    onPress={onPressCreateRecipe}>
                    <Icon name="create-outline" size={24} />
                </Pressable>
                <View>

                </View>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>인제 레시피</Text>
            </Animated.View>
        )
    }
    return (
        <>
        <View style={{
            flex: 1,
            backgroundColor: Colors.BACKGROUND_DEFAULT,
        }}>
            <View style={{
                height: 50,
            }}>
                {/* 세이프 아리아 방지뷰 */}
            </View>
            <AnimatedHeader />
            <ScrollView
                style={{ flex: 0.95, }}
                bounces={false}
                onScroll={handleScroll}
                scrollEventThrottle={1}
                showsVerticalScrollIndicator={false}
                >
                
                <Animated.View
                    style={{
                        opacity: fadeAnim,
                        height: height * 0.5,
                        borderBottomWidth: 1,
                        borderColor: Colors.SEPARATED_LINE,
                        backgroundColor: bgColor
                    }}>
                    <View style={{
                        flex: 0.5,
                        paddingHorizontal: 40,
                        alignItems: "flex-end",
                        flexDirection: 'row',
                        paddingVertical: 30
                    }}>
                        <View style={{ backgroundColor: bgColor, width: '100%', borderRadius: 20,justifyContent:"center" }}>
                            <LottieView
                                style={{ width: 260, height: 260,position:"absolute",left:-20, }}
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
                <View style={{ height: 585, borderBottomWidth: 0.8, borderColor: Colors.SEPARATED_LINE_TORNUP }}>
                    <WeatherRecommendView 
                        weatherRecipe={weatherRecipe} 
                        weatherTitle={weatherTitle}
                        setIsLoading={setIsLoading}
                         />
                </View>
                <View style={{ height: 650, borderColor: Colors.SEPARATED_LINE_TORNUP, borderBottomWidth: 0.8 }}>
                    <KeyWordRecommendView
                    setIsLoading={setIsLoading}
                    />
                </View>
                <View style={{ height: 400, borderColor: Colors.SEPARATED_LINE_TORNUP, borderBottomWidth: 0.8 }}>
                    <UserRecipeView
                    setIsLoading={setIsLoading}
                    
                    />
                </View>
            </ScrollView>


        </View>
        {isLoding?<LoadingIndicaotrView text='레시피 확인중...'/>:null}
        </>
    )
}

