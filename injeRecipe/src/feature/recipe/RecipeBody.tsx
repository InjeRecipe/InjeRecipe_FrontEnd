import React, { useEffect, useState } from "react"
import { FlatList, Image, Text, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import { Margin } from "../../component/Margin"

export const RecipebodyView = ({ recipeData,isNull }: any) => {
    // console.log('RecipeBodyView reccipeData', recipeData.item.recipe_images)
    // console.log('RecipeBodyView reccipeData', recipeData.item.recipe_manuals)
    const { getHeight } = useDimention()
    
    // MANUAL 속성들의 키를 배열로 추출
    // MANUAL 속성과 MANUAL_IMG 속성을 모두 포함한 키들을 추출하여 정렬

    // MANUAL 속성과 MANUAL_IMG 속성을 각각 순서대로 배열에 담음
    useEffect(() => {
        if (recipeData.item.recipe_file_s == null) {
            recipeData.item.recipe_file_s = '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/images/nullRecipeImage.png'
        }
    }, [])

    const RecipeBodyRenderItem = ({ item, index }: any) => {
        const data = recipeData.item.recipe_images[index]
        console.log(data)

        function convertToHttps(path: string) {
            if (path != null) {
                if (path.startsWith('http://')) {
                    return path.replace('http://', 'https://');
                } else {
                    return path;
                }
            }
        }
        if (item)
            return (
                <View style={{
                    height: getHeight() * 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    marginBottom: 20,
                    backgroundColor: Colors.BACKGROUND_LIGHTGRAY,

                    borderColor: Colors.ITEM_ARROW_GRAY
                }}>
                    <View style={{
                        width: "85%",
                        backgroundColor: Colors.BACKGROUND_WHITE_DOWN,
                        alignItems: "center",
                        justifyContent: "center",
                        height: "75%",
                        borderTopEndRadius: 25,
                        borderTopLeftRadius: 25,
                        borderWidth: 0.6,
                        borderBottomWidth: 0,
                        borderColor: Colors.ITEM_ARROW_GRAY
                    }}>
                        <Image
                            style={{
                                width: '70%',
                                height: 200,
                                resizeMode: 'cover',
                                borderRadius: 25
                            }}
                            source={{ uri: convertToHttps(data) }} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        width: '85%',
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 25,
                        backgroundColor: Colors.BACKGROUND_WHITE_DOWN,
                        height: 100,
                        borderWidth: 0.6,
                        borderTopWidth: 0,
                        borderColor: Colors.ITEM_ARROW_GRAY
                    }}>
                        <Image
                            style={{ width: 50, height: 35, marginRight: 10 }}
                            source={{ uri: "/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/forkLogo.png" }}
                        />
                        <Text style={{ alignItems: "center", fontSize: 16,flex:1 }}>{item}</Text>
                    </View>
                </View>
            )
    }
    const NullRecipeView = () => {
        return(
            <View>
                <Text>null</Text>
            </View>
        )
    }
    return (
        <View>
            {
                isNull?<NullRecipeView/>:
                <>
                <Text style={{ alignSelf: "center", fontWeight: 'bold', fontSize: 22, marginTop: 22, marginBottom: 22 }}>과정정보</Text>
            <FlatList
                style={{}}
                scrollEnabled={false}
                data={recipeData.item.recipe_manuals}
                renderItem={({ item, index }) => { return (<RecipeBodyRenderItem item={item} index={index} />) }}
            />
            <Margin height={50} />
            </>
            }
            
        </View>
    )
}