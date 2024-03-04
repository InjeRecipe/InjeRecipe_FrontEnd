import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import BitSwiper from 'react-native-bit-swiper';
import PropTypes from 'prop-types';
import { SwiperFlatList } from 'react-native-swiper-flatlist'
import { useSelector } from "react-redux";
import { RootReducerState } from "../../redux/store";
import { useDimention } from "../../hooks/useDimension";
import { useRecommend } from "../../hooks/useRecommend";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../color/Colors";
import { RecipeRenderItem } from "./RecipeRenderItem";
export const WeatherRecommendView = () => {
    const data: any = useSelector<RootReducerState>((state) => state.login.recommendMenu)
    const { sampleData } = useRecommend()
    const { getHeight, getWeight } = useDimention()
    // const [keyWord,setKeyword] = useState<Array<any>|any>(data.menu) 서버 끊겨있어서 임시 데이터
    const [keyWord, setKeyword] = useState<Array<any> | any>(sampleData)

    return (
        <View style={{ flex: 1, alignItems: "center", }}>
            <View style={{ flex: 0.15, width: '100%', paddingHorizontal: 20, paddingTop: 20,marginTop:20 }}>
                {/* keyword select view */}
                <Text style={{ fontSize: 22,color:Colors.REFRIGATOR_AI_BUTTON,fontWeight:'bold' }}>흐린 날씨
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
                    horizontal={true}
                    data={keyWord}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        console.log('myitem', item)
                        return (
                            <RecipeRenderItem item={item}index={index}/>
                        )
                    }} />
            </View>
            <View style={{
                flex: 0.15,
                width: '100%',
                justifyContent: "center",
                alignItems: "center"
            }}>
                {/* refresh view */}
                <View style={{
                    flex: 0.7,
                    borderWidth: 0.8,
                    borderColor: Colors.SEPARATED_LINE_TORNUP,
                    width: '80%',
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'row'
                }}>
                    <Text style={{ fontSize: 16, marginRight: 5 }}>
                        새로운 레시피 가져오기
                    </Text>
                    <Icon name="refresh" size={16} />
                </View>
            </View>
        </View>
    );
};


export default WeatherRecommendView;
