import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { useDimention } from "../../hooks/useDimension";

import { Colors } from "../../color/Colors";

import Swiper from "react-native-swiper";


export const RecipeInfoView = ({recipeData}:any) => {
    const {
        getHeight,
        getWeight
    } = useDimention()
    
    const [renderingImage, setRenderingImage] = useState<Array<string>>(recipeData.postData)
    const convertStringData = (string:any) => {
       
            const replacedString = string.replace(/\n/g, ',');
        return replacedString
        
    }

    const ingredientArray = convertStringData(recipeData.item.recipe_parts_dtls).split(',');
    // dataArray는 재료 데이터 들고와야하는데 현재 없어서 대기
    const path = `${recipeData.item.recipe_file_s}`
        function convertToHttps(path:string) {
            if ( path == null) {
                return ''
            } 
            else if (path.startsWith('http://')) {
                return path.replace('http://', 'https://');
            }
            
            else {
                return path;
            }
        }
        
   
    
    
    const RenderView = ({index,keys}:any) => {
        // console.log('--------')
        // console.log(index)
        return(
            <View
                
                style={{width:'85%',flex:0.39,flexDirection:'row',paddingHorizontal:20,alignSelf:"center"}}>
                    <View style={{flex:0.35,width:'100%',alignItems:"center",justifyContent:"center"}}>
                        {/* image view */}
                        <Image source={{uri:recipeData.res.data[index]==null?`/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/nullRecipeImage.png`:recipeData.res.data[index]}} 
                        style={{width:'100%',height:'100%',borderRadius:15,resizeMode:'center'}}/>
                    </View>
                    <View style={{flex:0.65,flexDirection:'row'}}>
                        <View style={{flex:0.6,justifyContent:"center"}}>
                            <Text style={{fontSize:20,}}>{renderingImage[index]}</Text>
                            
                        </View>
                        <View style={{flex:0.4,justifyContent:"center"}}>
                            
                        </View>
                    </View>
                    
            </View>
        )
    }

    //  재료가 포함된 뷰 졸작때 활용
    const TestView = () => {
        const NextButton = () => {
            return(
                <Text style={{fontSize:50,color:Colors.SELECTED_ITEM_BACKGROUND}}>{`>`}</Text>
            )
        }
        const PrevButton = () => {
            return(
                <Text style={{fontSize:50,color:Colors.SELECTED_ITEM_BACKGROUND}}>{`<`}</Text>
            )
        }
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
                        marginTop: 40
                    }}>{recipeData.item.recipe_nm}</Text>
                    <Text style={{
                        fontSize: 14,
                        marginTop: 15,
                        alignSelf: "center",
                        color: Colors.SEPARATED_LINE_TORNUP
                    }}>{renderingImage.length} ingredients</Text>
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
                                    source={{ uri: recipeData.res.data[index]==null?`/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/nullRecipeImage.png`:recipeData.res.data[index] }} />
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
                        style={{paddingTop:25}}
                        loop={false}
                        showsPagination={false}
                        nextButton={<NextButton/>}
                        prevButton={<PrevButton/>}
                        showsButtons={true}
                        >
                        {renderingImage.map((item,index)=>{
                            console.log("rerwerw",renderingImage.length)
                            if(renderingImage.length/2>index){
                            return(
                                <>
                                <RenderView index={index*2} keys={index*2}/>
                                {index==renderingImage.length&& index%2==0?
                                    null:<RenderView index={index*2+1} keys={index*2+1}/>
                                }
                                
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