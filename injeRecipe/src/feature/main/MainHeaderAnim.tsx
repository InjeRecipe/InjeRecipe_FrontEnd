import React, { useEffect, useMemo, useState } from "react"
import { Text, View } from "react-native"
import { useWeather } from "../../hooks/useWeather"
import { useDimention } from "../../hooks/useDimension"
import { useSelector } from "react-redux"
import { RootReducerState } from "../../redux/store"

export const MainHeaderAnim = () => {
    const { getHeight } = useDimention()
    const height = getHeight()
    const {getWeatherState} = useWeather()
    const [bgColor,setBgColor] =useState<string|undefined>('')
    const [imageUri,setImageUri] = useState<string|undefined>('')
    const [aiMessage,setAiMessage] = useState<string|undefined>('')

    const weather = useSelector((state:RootReducerState)=> state.login.userWeather)
    useEffect(() => {
        console.log(weather)
        const data = getWeatherState(weather)
        setBgColor(data?.BgColor)
        setAiMessage(data?.AiMessage)
        setImageUri(data?.ImageUri)
        
    }, [])
   
 
    return (
        <View style={{height:height*0.5,borderWidth:1,}}>
            <View style={{flex:0.9,paddingHorizontal:15,alignItems:"flex-end",flexDirection:'row',paddingVertical:10}}>
                <Text style={{fontSize:30,borderWidth:2}}>
                    {aiMessage}
                </Text>
            </View>
           </View>

    )
}