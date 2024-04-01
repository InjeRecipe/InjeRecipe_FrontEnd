import React, { useEffect, useState } from "react"
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native"
import { EditViewHeader } from "./EditViewHeader"
import { EditInfoBody } from "./EditInfoBody"
import { Colors } from "../../color/Colors"
import Icon from "react-native-vector-icons/Ionicons";
import { launchImageLibrary } from "react-native-image-picker"
import { useDimention } from "../../hooks/useDimension"
import { useRecipe } from "../../hooks/useReipce"
export const CreateRecipeInfoView =() => {
    
    const {setRecipeFileS,setRecipeNm,setRecipeEng} = useRecipe()
    const [mainImage, setMainImage] = useState('')
    const { getWeight, getHeight } = useDimention()
    useEffect(()=>{

    })
    const RecipeMainImagePicker = () => {
        const onPressImagePicker = () => {
            launchImageLibrary({
                mediaType: "photo",
            }, (response: any) => {
                console.log(response)
                if (response&&!response.didCancel) {
                    
                    setRecipeFileS( {
                        name:response.assets[0].fileName,
                        uri:response.assets[0].uri,
                        type:response.assets[0].type,
                    })
                    setMainImage(response.assets[0].uri)
                }
                
            })
        }
        return(
            <View style={{ padding: 20 }}>
                <View
                    style={{
                        flexDirection: "row",
                        borderBottomWidth: 0.5,
                        borderBottomColor: Colors.ITEM_BORDER_GRAY,
                        marginBottom: 15,
                        height: 30,
                    }}>
                            <Text
                                style={{
                                    marginRight: 5,
                                    color: Colors.BUTTON_SIGNIN,
                                    fontWeight: 'bold',
                                }}>레시피 대표 이미지를 정해주세요</Text>
                            <Icon name="fast-food-outline" size={16} color={Colors.BUTTON_SIGNUP} />
                </View>
                <Pressable 
                     onPress={onPressImagePicker}
                style={{
                    borderWidth: 1,
                    alignSelf: "center",
                    width: getWeight() * 0.34,
                    height: getHeight() * 0.15,
                    borderRadius: 75,
                    marginTop: 20,
                    borderColor: Colors.ITEM_ARROW_GRAY,
                    backgroundColor: Colors.SEPARATED_LINE,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                     {mainImage == '' ?
                    <Icon name="add" size={16} color={Colors.ITEM_BORDER_GRAY} />:
                    <Image 
                        source={{ uri:mainImage}} 
                        style={{
                            width: getWeight() * 0.34,
                            height: getHeight() * 0.15,
                            borderRadius:75}}/>}
                </Pressable>
            </View>
        )
    }
    return(
        <SafeAreaView>
            <EditViewHeader next='다음' prev='<'/>
            <ScrollView
            style={{borderWidth:1}}
            scrollEnabled={true}
            bounces={false}
            showsVerticalScrollIndicator={false}>
            <RecipeMainImagePicker/>
            <EditInfoBody
                mainImage={mainImage}
                setMainImage={setMainImage}
                setRecipeNm={setRecipeNm}
                setRecipeEng={setRecipeEng}
            />
            </ScrollView>
        </SafeAreaView>
    )
}