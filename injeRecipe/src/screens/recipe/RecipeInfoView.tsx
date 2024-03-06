import React, { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { useDimention } from "../../hooks/useDimension";
import { useNavigation } from "@react-navigation/core";
import { Colors } from "../../color/Colors";
import  Icon  from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";


export const RecipeInfoView = ({recipeData}:any) => {
    
    const {
        getHeight,
        getWeight
    } = useDimention()
    const navigation = useNavigation<any>();
    
    const dataArray = recipeData.item.RCP_PARTS_DTLS.split(',');
    console.log('REcipeInfoView ====== ',dataArray)
    const path = `${recipeData.item.recipe_file_s}`
        function convertToHttps(path:string) {
            if (path.startsWith('http://')) {
                return path.replace('http://', 'https://');
            } else {
                return path;
            }
        }
    const [dishName, setDishName] = useState('제육복음')
    const [ingredientAmount, setIngredientAmount] = useState('15')
    const [renderingImage, setRenderingImage] = useState<Array<string>>([
        '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/dishes01.jpeg',
        '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/dishes02.jpeg',
        '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/dishes03.jpeg',
        '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/dishes02.jpeg',
        '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/dishes02.jpeg',
        '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/dishes02.jpeg',
        '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/dishes02.jpeg',
        '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/dishes02.jpeg',
        '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/main/dishes02.jpeg',
    
        
    ])
    const onPressBackArrow = () => {
        navigation.pop()
    }
    const RenderView = ({index,keys}:any) => {
        // console.log('--------')
        // console.log(index)
        return(
            <View
                key={`${keys}`}
                style={{width:'100%',flex:0.39,flexDirection:'row',paddingHorizontal:20}}>
                    <View style={{flex:0.35,width:'100%',alignItems:"center",justifyContent:"center"}}>
                        {/* image view */}
                        <Image source={{uri:renderingImage[index]}} 
                        style={{width:'75%',height:getHeight()*0.1,borderRadius:15}}/>
                    </View>
                    <View style={{flex:0.65,flexDirection:'row'}}>
                        <View style={{flex:0.6,justifyContent:"center"}}>
                            <Text style={{fontSize:20,}}>재료명</Text>
                            <Text style={{color:Colors.SEPARATED_LINE_TORNUP}}>재료양</Text>
                        </View>
                        <View style={{flex:0.4,justifyContent:"center"}}>
                            <Text style={{fontSize:16,color:Colors.SEPARATED_LINE_TORNUP}}>168kcal</Text>
                        </View>
                    </View>
                    
            </View>
        )
    }
    //  재료가 포함된 뷰 졸작때 활용
    const TestView = () => {
        return(
            <>
            <View style={{
                position: "absolute",
                width: '85%',
                height: getHeight()*0.25,
                backgroundColor: Colors.BACKGROUND_DEFAULT,
                borderColor: Colors.SEPARATED_LINE,
                borderWidth: 1.5,
                left: getWeight() * 0.08,
                top: getHeight() * 0.3,
                zIndex: 1,
                borderRadius: 10,
                alignItems: "center",

            }}>
                <View style={{ flex: 0.35, justifyContent: "center", alignItems: "center" }}>
                    {/* title section (ingredient,name) */}
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        marginTop: 50
                    }}>{recipeData.item.RCP_NM}</Text>
                    <Text style={{
                        fontSize: 14,
                        marginTop: 15,
                        alignSelf: "center",
                        color: Colors.SEPARATED_LINE_TORNUP
                    }}>{dataArray.length} ingredients</Text>
                </View>
                <View style={{ flex: 0.75, width: '100%' }}>
                    {/* ingredient image section */}
                    <FlatList
                        data={renderingImage}
                        horizontal={true}
                        scrollEnabled={false}
                        contentContainerStyle={{ alignItems: "center", paddingHorizontal: 8 }}
                        renderItem={({ item, index }: any) => {
                            if(index<5){
                            return (
                                <Image
                                    style={{ width: 55, height: 55, borderRadius: 10, marginRight: 9.1 }}
                                    source={{ uri: item }} />
                            )}
                            else return(null)
                        }} />
                </View>
            </View>
            <View style={{
                flex: 0.6,
                borderWidth: 1,
                borderTopWidth: 0,
                borderColor: Colors.SEPARATED_LINE,
                backgroundColor: Colors.BACKGROUND_DEFAULT,
                borderBottomRightRadius: 25,
                borderBottomLeftRadius: 25,
                zIndex: 0
            }}>
                <View style={{ flex: 0.3, }}/>
                <View style={{ flex: 0.5, width: '100%', alignItems: "center",}}>
                    <Swiper
                        style={{}}
                        loop={false}
                        >
                        {renderingImage.map((item,index)=>{
                            if(renderingImage.length/2>index){
                            return(
                                <>
                                <RenderView index={index*2} keys={index*2}/>
                                <RenderView index={index*2+1} keys={index*2+1}/>
                                </>
                            )
                            }
                            else null
                        })}
                        
                    </Swiper>
                </View>
            </View>
            </>
        )
    }
    // 배케이션용 뷰 
    const VacationView = () => {
        return(
            <View style={{
                flex: 0.6,
                borderWidth: 1,
                borderTopWidth: 0,
                borderColor: Colors.SEPARATED_LINE,
                backgroundColor: Colors.BACKGROUND_DEFAULT,
                borderBottomRightRadius: 25,
                borderBottomLeftRadius: 25,
                zIndex: 0
            }}>
                <View style={{ flex: 0.25, alignItems: "center" }}>
                    {/* title section (ingredient,name) */}
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        marginTop: 50
                    }}>{recipeData.item.RCP_NM}</Text>
                    <Text style={{
                        fontSize: 14,
                        marginTop: 15,
                        alignSelf: "center",
                        color: Colors.SEPARATED_LINE_TORNUP
                    }}>{dataArray.length} ingredients</Text>
                </View>
                <View style={{ flex: 0.68, width: '100%', alignItems: "center",}}>
                    <Text style={{fontSize:22,fontWeight:'bold',marginBottom:22}}>재료 정보</Text>
                    <FlatList
                        data={dataArray}
                        scrollEnabled={false}
                        renderItem={({item,index}:any)=>{return(
                            <View style={{width:200,height:25,borderBottomWidth:0.23}}>
                                <Text>{item}</Text>
                            </View>)}}
                    />
                </View>
            </View>
        )
    }
    return (
        <>
            <View style={{
                borderWidth: 1,
                borderBottomWidth: 0,
                borderColor: Colors.SEPARATED_LINE,
                flex: 0.4,
                backgroundColor: Colors.BACKGROUND_LIGHTGRAY,
                borderTopLeftRadius: 25,
                borderTopEndRadius: 25,
                alignItems: "center",
                justifyContent: "center"
            }}>
                <View style={{flex:0.28,
                
                paddingHorizontal:20,
                flexDirection:"column",
                width:'100%'
                }}>
                    <View style={{flex:0.8}}/>
                    <Pressable onPress={onPressBackArrow}>
                    <Icon name='chevron-back' size={26} color={Colors.SEPARATED_LINE_TORNUP}></Icon>
                    </Pressable>
                </View>
                <View style={{flex:0.72,}}>
                    <Image
                        style={{ width: 150, height: 150, borderRadius: 75, }}
                        source={{ uri: convertToHttps(path) }} />
                </View>
            </View>
            <TestView/>
            
        </>
    )
}