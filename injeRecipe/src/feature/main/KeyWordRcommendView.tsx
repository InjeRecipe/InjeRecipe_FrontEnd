import React, { useState } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import SwiperFlatList from "react-native-swiper-flatlist"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import Icon from "react-native-vector-icons/Ionicons";
import { useRecommend } from "../../hooks/useRecommend"
import { RecipeRenderItem } from "./RecipeRenderItem"

export const KeyWordRecommendView = () => {
    const {
        sampleData,
        keyWord
    } = useRecommend()
    const [recepeItem, setRecepeItem] = useState<any>(sampleData)
    

    const [isClicked, setIsClicked] = useState(0)
    const onPressKeyWord = (index:any) => {
        setIsClicked(index)
    }
    const RenderItem = ({ item, index }: any) => {
        
        return (
            <TouchableOpacity onPress={()=>{onPressKeyWord(index)}}>
            <View style={{
                width: 80,
                height:25,
                marginRight: 10,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                borderWidth:0.17,
                borderColor:Colors.SEPARATED_LINE_TORNUP,
                backgroundColor:isClicked!=index?Colors.FONT_WHITE:Colors.SELECTED_ITEM_BACKGROUND
            }}>
                <Text style={{
                    color:'black',
                    fontSize: isClicked==index?16:15,
                }}>{item.title}</Text>
            </View>
            </TouchableOpacity>
        )
    }
    
    return (
        <View style={{ flex: 1, alignItems:"center"}}>
            <View style={{ flex: 0.15, width: '100%', paddingHorizontal: 20, paddingTop: 20,marginTop:20}}>
                {/* keyword select view */}
                <Text style={{ 
                    fontSize: 22,
                    color:Colors.REFRIGATOR_AI_BUTTON,
                    fontWeight:'bold' }}>키워드
                    <Text style={{ fontSize: 18, color:'black',fontWeight:'normal'}}>를 적용해</Text>
                </Text>
                <Text style={{ fontSize: 18, marginTop: 3 }}>레시피를 확인해보세요.</Text>

            </View>
            <View style={{ flex: 0.7, width: '100%', paddingLeft: 20, }}>
                {/* keyword select view */}
                <View style={{ flex: 0.08,}}>
                    <FlatList
                        style={{
                            flex: 1,
                            
                        }}
                        scrollEnabled={false}
                        data={keyWord}
                        horizontal={true}
                        renderItem={({ item, index }: any) => {
                            return (<RenderItem item={item} index={index} />)
                        }}
                        keyExtractor={(item) => `${item.key}`}
                    />
                </View>
                <View style={{ flex: 0.92, width: '100%',}}>
                    <FlatList
                        style={{
                            width: '100%',
                            flex: 1,
                            paddingVertical:8
                        }}
                        horizontal={true}
                        data={recepeItem}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return(<RecipeRenderItem item={item}index={index}/>)
                        }} />
                </View>
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
                    borderWidth: 0.2,
                    borderColor: Colors.SEPARATED_LINE_TORNUP,
                    width: '80%',
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'row',
                    backgroundColor:Colors.FONT_WHITE
                }}>
                    <Text style={{ fontSize: 16, marginRight: 5}}>
                        새로운 레시피 가져오기
                    </Text>
                    <Icon name="refresh" size={16} />
                </View>
            </View>
        </View>
    )
}