import React from "react";
import { Image, Text, View } from "react-native";
import { WeatherCard } from "../weather/WeatherCard";
import { Header } from "../../component/Header";
import { Margin } from "../../component/Margin";

export function MainView(){
    return(
        <View style={{flex:1}}> 
            <Header/>
            <Margin height={10}/>
            <Text>
            

            </Text>
            <WeatherCard/>
            <Margin height={15}/>
            {/* 
            음식 이미지 발표 준비용 샘플
            <View style={{flexDirection:"row"}}>
            <View style={{
                borderWidth:1,
                height:200,
                width:150,
                marginLeft:10,
                borderRadius:5}}>
                <Text>item1</Text>
                <Image style={{flex:1}} source={{uri:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/testDishImage.jpeg'}}/>
            </View>
            <View style={{
                borderWidth:1,
                height:200,
                width:150,
                marginLeft:10,
                borderRadius:5}}>
                <Text>item2</Text>
                <Image style={{flex:1}} source={{uri:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/testDishImage2.jpeg'}}/>
            </View>
            <View style={{
                borderWidth:1,
                height:200,
                width:150,
                marginLeft:10,
                borderRadius:5}}>
                <Text>item3</Text>
                <Image style={{flex:1}} source={{uri:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/testDishImage3.jpeg'}}/>
            </View>
            </View> */}
        </View>
    )
}