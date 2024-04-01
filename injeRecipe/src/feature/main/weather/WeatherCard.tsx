import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { useLocation } from "../../../hooks/useLocation";
import { WeahterView,} from "./WeatherView";
import { weatherService } from "../../../services/weatherService";
import Geolocation from "@react-native-community/geolocation";
import { chatGptService } from "../../../services/chatGptService";
import { useSelector } from "react-redux";
import { RootReducerState } from "../../../redux/store";

const hegiht = Dimensions.get('window').height
export function WeatherCard({ height }: any) {
    const {POST_WEATHER} = weatherService()
    const [location,setLocation] = useState<any>()
    const [weather, setWeather] = useState<any>()
    const token = useSelector((state:RootReducerState)=>state.login.userToken)
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
        type data ={lat:string,lon:string,token:string}
         const postData:data = {
            lat:location.coords.latitude+"",
            lon:location.coords.longitude+"",
            token:token
        }
        console.log(typeof postData.lat)
        console.log(typeof postData.lon)
        POST_WEATHER(postData).then((res)=>{
            console.log('POSTWEATHER',res.weather.main)
            setWeather(res.weather.main)
        })
    }
   },[location])

   useMemo(()=>{
        console.log(weather)
   },[weather])
    
    
       
    
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