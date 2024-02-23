import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { RefrigatorHeader } from "./RefrigatorHeader";
import BitSwiper from 'react-native-bit-swiper';
import { Colors } from "../../color/Colors";
export function AiRecommendView() {
    const data = ['', '', '', '']
    return (
        <View style={{ flex: 1,width:'100%' }}>
            <View style={{ flex: 0.06 }}>
                <RefrigatorHeader title="결과화면" left={true} right={false} handlePresentModalPress={() => { }} />
            </View>
            <View style={{ flex: 0.94 }}>
                <View style={{ borderWidth: 1, flex: 0.85, alignItems: "center", justifyContent: "center" }}>
                    {/* item view */}
                    <View style={{ alignItems: "center" }}>
                        <BitSwiper
                            initItemIndex={0}
                            showPaginate={false}
                            items={['Item 1', 'Item 2', 'Item 3']}
                            itemWidth="80%" // 활성 아이템의 넓이
                            inactiveItemScale={0.8} // 비활성 아이템의 스케일
                            inactiveItemOpacity={0.5} // 비활성 아이템의 투명도
                            inactiveItemOffset={30} // 비활성 아이템 표시 넓이
                            onItemRender={({ item, index }: any) => (
                                <View key={index} style={{ height: 500 }}>
                                    <View
                                        style={{
                                            flex:1,
                                            width: '100%',
                                            height: '100%',
                                            borderWidth:1 }}>
                                        <View style={{
                                            flex:0.4,
                                            borderWidth:1,
                                            alignItems:"center",
                                            justifyContent:"center"
                                        }}>
                                            <View>
                                                <Image 
                                                style={{width:100,height:100}}
                                                source={{uri:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/testDishImage.jpeg'}}/>
                                            </View>
                                        </View>
                                        <View style={{
                                            flex:0.6,
                                            borderWidth:1
                                        }}>
                                            <Text>재료 정보</Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />

                    </View>
                </View>
                <View style={{ 
                    flex: 0.15,
                    alignItems:"center",
                    justifyContent:"center",
                    width:'100%',
                    borderWidth:1 }}>
                    {/* button view */}
                    <Pressable style={{
                        backgroundColor:Colors.REFRIGATOR_AI_BUTTON,
                        width:'60%',
                        height:'50%',
                        borderRadius:30,
                        alignItems:"center",
                        justifyContent:"center"
                        }}>
                        <Text style={{
                            color:Colors.FONT_WHITE,
                            fontSize:18,
                            fontWeight:'bold'
                        }}>레시피 확인하기</Text>
                    </Pressable>        
                </View>
            </View>
        </View>
    )
}