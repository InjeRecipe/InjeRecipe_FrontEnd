import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import BitSwiper from 'react-native-bit-swiper';
import PropTypes from 'prop-types';
import { SwiperFlatList } from 'react-native-swiper-flatlist'
import { useDispatch, useSelector } from "react-redux";
import { RootReducerState } from "../../redux/store";
import { useDimention } from "../../hooks/useDimension";
import { useRecommend } from "../../hooks/useRecommend";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../color/Colors";
import { RecipeRenderItem } from "./RecipeRenderItem";
import { chatGptService } from "../../services/chatGptService";
import { setWeatherRecipe } from "../../redux/action/actionLogin";
import { recipeService } from "../../services/recipeService";
export const WeatherRecommendView = ({weatherRecipem,
    weatherTitle,
    setIsLoading
}:any) => {
    const {GET_NEW_RECIPE} = chatGptService()
    const {GET_SERACH_RECIPES} = recipeService()
    const data: any = useSelector<RootReducerState>((state) => state.login.weatherRecipe)
    console.log('WeatherREcommendView Data -========', data)
    const token = useSelector((state:RootReducerState)=> state.login.userToken)
    const dispatch = useDispatch()
    //const [keyWord,setKeyword] = useState<Array<any>|any>(data.menu) 
    const onPressReset = () => {
        GET_NEW_RECIPE(token).then((res:any)=>{
            console.log(res.menu[0])
            const postData = {
                keywords:[ res.menu[0],
                res.menu[1],
                res.menu[2],
                res.menu[3],
                res.menu[4],
                res.menu[5],
                res.menu[6],
                res.menu[7],]
               
            }
            GET_SERACH_RECIPES({data:postData,token:token}).then((res:any)=>{
                console.log("@@@@@@res@@@@@@@2",res)
                dispatch(setWeatherRecipe(res.data))
            })
        })
    }
    return (
        <View style={{ flex: 1, alignItems: "center", }}>
            <View style={{ flex: 0.15, width: '100%', paddingHorizontal: 20, paddingTop: 20,marginTop:20 }}>
                {/* keyword select view */}
                <Text style={{ fontSize: 22,color:Colors.REFRIGATOR_AI_BUTTON,fontWeight:'bold' }}>{weatherTitle}
                    <Text style={{fontSize:18, fontWeight:'normal',color:'black'}}>에는</Text>
                </Text>
                <Text style={{ fontSize: 18, marginTop: 3 }}>다음과 같은 레시피를 사용해보세요.</Text>
            </View>
            <View style={{ flex: 0.7, width: '100%', paddingLeft: 20,}}>
                <FlatList
                    style={{
                        width: '100%',
                        flex: 1,
                    }}
                    data={data}
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={({ item, index }) => {
                        console.log('myitem', data.length)
                        if(item != undefined && index < data.length/2){
                            return (
                                <RecipeRenderItem item={item}index={index} value='weather' setIsLoading={setIsLoading}/>
                            )
                        }
                        else return null
                        
                    }} />
            </View>
            <View style={{
                flex: 0.15,
                width: '100%',
                justifyContent: "center",
                alignItems: "center"
            }}>
                {/* refresh view */}
                {/* <TouchableOpacity style={{
                    flex: 0.7,
                    borderWidth: 0.8,
                    borderColor: Colors.SEPARATED_LINE_TORNUP,
                    width: '80%',
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'row'
                }}
                    onPress={onPressReset}
                >
                    <Text style={{ fontSize: 16, marginRight: 5 }}>
                        새로운 레시피 가져오기
                    </Text>
                    <Icon name="refresh" size={16} />
                </TouchableOpacity> */}
            </View>
        </View>
    );
};


export default WeatherRecommendView;
