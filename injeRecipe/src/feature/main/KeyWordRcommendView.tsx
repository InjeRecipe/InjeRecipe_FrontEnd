import React, { useState } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import SwiperFlatList from "react-native-swiper-flatlist"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import Icon from "react-native-vector-icons/Ionicons";
import { useRecommend } from "../../hooks/useRecommend"
import { RecipeRenderItem } from "./RecipeRenderItem"
import { useDispatch, useSelector } from "react-redux"
import { RootReducerState } from "../../redux/store"
import { KeywordRenderItemView } from "./KeywordRenderItemView"
import { recipeService } from "../../services/recipeService"
import { setKeywordRecipe, setWeatherRecipe } from "../../redux/action/actionLogin"
import { chatGptService } from "../../services/chatGptService"

export const KeyWordRecommendView = ({
    setIsLoading
}:any) => {
    const {
        keyWord
    } = useRecommend()
    const array = new Array(8)
    const [isClicked, setIsClicked] = useState(0)
    const {GET_SERACH_RECIPES} = recipeService()
    const {GET_NEW_KEYWORD_RECIPE} = chatGptService()
    const keywordList = useSelector((state:RootReducerState)=>state.login.keywordRecipe)
    const token = useSelector((state:RootReducerState)=>state.login.userToken)
    const dispatch = useDispatch()
    const [postData,setPostData] = useState<any>()
    const onPressKeyWord = (index:any,title:any) => {
        console.log('isClicked',isClicked)
        const data = {
            keywords:[

            ]
        }
        if(title == "중식"){
            data.keywords = keywordList.cn.menu
        }
        else if(title == "한식"){
            data.keywords = keywordList.kr.menu
        }
        else if(title == '양식'){
            data.keywords = keywordList.usa.menu
        }
        else if(title == '일식'){
            data.keywords = keywordList.jp.menu
        }
        
        GET_SERACH_RECIPES({data:data,token:token}).then((res:any)=>{
            dispatch(setKeywordRecipe({data:keywordList,kr:res.data}))
            // console.log(res)
           
        })
        setIsClicked(index)
    }
    const RenderItem = ({ item, index }: any) => {
        
        
        return (
            <TouchableOpacity onPress={()=>{onPressKeyWord(index,item.title)}}>
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
                            return (<RenderItem item={item} index={index} value='keyword'/>)
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
                        bounces={false}
                        horizontal={true}
                        data={array}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if(index < array.length/2){
                            return(<KeywordRenderItemView item={item}index={index} setIsLoading={setIsLoading}/>)
                            }
                            else return null
                        }} />
                </View>
            </View>
            <View style={{
                flex: 0.15,
                width: '100%',
                justifyContent: "center",
                alignItems: "center"
            }}>
                
                {/* <TouchableOpacity style={{
                    flex: 0.7,
                    borderWidth: 0.2,
                    borderColor: Colors.SEPARATED_LINE_TORNUP,
                    width: '80%',
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'row',
                    backgroundColor:Colors.FONT_WHITE
                }}
                onPress={()=>{
                    keyWord.map(({key,title}:any)=>{
                        if(isClicked==key){
                            GET_NEW_KEYWORD_RECIPE({data:title,token:token}).then((res:any)=>{
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
                                    dispatch(setKeywordRecipe({data:keywordList,kr:res.data}))
                                })
                            })
                        }
                    })
                    
                   
                }}
                >
                    <Text style={{ fontSize: 16, marginRight: 5}}>
                        새로운 레시피 가져오기
                    </Text>
                    <Icon name="refresh" size={16} />
                </TouchableOpacity> */}
            </View>
        </View>
    )
}