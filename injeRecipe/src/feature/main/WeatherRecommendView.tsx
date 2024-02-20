import React, { useEffect, useState } from "react";
import { View } from "react-native";
import BitSwiper from 'react-native-bit-swiper';
import PropTypes from 'prop-types';
import {SwiperFlatList} from 'react-native-swiper-flatlist'
import { useSelector } from "react-redux";
import { RootReducerState } from "../../redux/store";
export const WeatherRecommendView = () => {
    const data:any = useSelector<RootReducerState>((state)=>state.login.recommendMenu)
    const [keyWord,setKeyword] = useState<Array<any>|any>(data.menu)
    console.log(data.menu)
    
    return (
        <View style={{flex:1,alignItems:"center"}}>
            <SwiperFlatList
                style={{
                    flex:0.8,
                    paddingVertical:20,}}
                contentContainerStyle={{alignItems:"center"}}
                paginationStyleItemInactive={{backgroundColor:'red'}}
                data={keyWord}
                renderItem={()=>{
                    return(
                        <View style={{borderWidth:1,height:500,width:300,borderRadius:10,marginLeft:20}}/>
                )}}/>
           <View style={{flex:0.2}}>

           </View>
        </View>
    );
};


export default WeatherRecommendView;
