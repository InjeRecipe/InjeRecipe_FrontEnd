import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { useLocation } from "../../../hooks/useLocation";
import { WeahterView,} from "./WeatherView";
import { weatherService } from "../../../services/weatherService";
import Geolocation from "@react-native-community/geolocation";
import { chatGptService } from "../../../services/chatGptService";

const hegiht = Dimensions.get('window').height
export function WeatherCard({ height }: any) {
    const {POST_WEATHER} = weatherService()
    const {GET_RECIPE} =chatGptService()
    const [location,setLocation] = useState<any>()
    const getNowLocation = ()=> {
        Geolocation.getCurrentPosition(data => {
            setLocation(data)
        }
        )
    }
    useEffect(() => {
        getNowLocation()
    }, [])
   useMemo(()=>{
    console.log('Memo',location)
    if(location){
        console.log('???')
        type data ={lat:string,lon:string}
         const postData:data = {
            lat:location.coords.latitude,
            lon:location.coords.longitude
        }
        POST_WEATHER(postData)
    }
   },[location])
    const [weather, setWeather] = useState('snow')
    
       
    
    return (
        <View style={{
            height: height * 0.5,
            backgroundColor: 'white',
            borderColor: 'red',
            padding: 10
        }}>
            <WeahterView weather={weather}/>
            
        </View>

    )
}