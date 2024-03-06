import React, { useState } from "react"
import { FlatList, Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import Icon from "react-native-vector-icons/Ionicons";
import { Margin } from "../../component/Margin";
import { launchImageLibrary } from "react-native-image-picker";

export const EditInfoBody = () => {
    const { getWeight, getHeight } = useDimention()
    const [kcalText, setKcalText] = useState('')
    const [ingredientText, setIngredientText] = useState([{ id: 1, value: '' }]);
    const [ingredientData, setIngredientData] = useState<Array<any>>([''])
    const [ingredientWeight, setIngredientWeight] = useState(0)
    const [mainImage, setMainImage] = useState('')

    const onPressImagePicker = () => {
        launchImageLibrary({
            mediaType: "photo",
        }, (response: any) => {
            if (response) setMainImage(response.assets[0].uri)
        })
    }
    const onPressAddIngrediant = () => {
        const newId = ingredientText[ingredientText.length - 1].id + 1;
        setIngredientText(prevInputs => [...prevInputs, { id: newId, value: '' }]);
    }
    const handleTextChange = (id: any, text: any) => {
        setIngredientText(prevInputs =>
            prevInputs.map(input =>
                input.id === id ? { ...input, value: text } : input
            )
        );
    };
    const RecipeProfileView = () => {
        return (
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
    const KcalInputView = () => {
        return (
            <View style={{ height: getHeight() * 0.18, padding: 20 }}>
                <View style={{
                    flexDirection: "row", borderBottomWidth: 0.5,
                    borderBottomColor: Colors.ITEM_BORDER_GRAY,
                    height: 30,
                }}>
                    <Text
                        style={{
                            marginRight: 5,
                            color: Colors.BUTTON_SIGNIN,
                            fontWeight: 'bold'
                        }}>열량 정보를 입력 해주세요</Text>
                    <Icon name="fast-food-outline" size={16} color={Colors.BUTTON_SIGNUP} />
                </View>
                <View style={{
                    backgroundColor: Colors.KCAL_INPUT_BOX,
                    borderRadius: 20,
                    marginTop: 20,
                    height: '45%',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <TextInput
                        value={kcalText}
                        onChangeText={(value) => { setKcalText(value) }}
                        style={{
                            width: "60%",
                            color: Colors.FONT_WHITE
                        }}
                        placeholder="0"
                        textAlign={'center'}
                        placeholderTextColor={Colors.FONT_WHITE}
                    />
                    <Text style={{ color: Colors.FONT_WHITE }}>kcal</Text>
                </View>
            </View>
        )
    }
    // const RenderItem = ({ item, index }: any) => {
    //     console.log(item)
    //     return (

    //     )

    // }
    // const IngradientView = () => {
    //     const testData = [0, 0, 0, 1]

    //     return (

    //     )
    // }
    return (
        <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}>
            <RecipeProfileView />
            <KcalInputView />

            <View style={{ padding: 20 }}>
                <View style={{
                    flexDirection: "row", borderBottomWidth: 0.5,
                    borderBottomColor: Colors.ITEM_BORDER_GRAY,
                    height: 30,
                    marginBottom: 20
                }}>
                    <Text
                        style={{
                            marginRight: 5,
                            color: Colors.BUTTON_SIGNIN,
                            fontWeight: 'bold'
                        }}>재료 정보를 입력 해주세요</Text>
                    <Icon name="fast-food-outline" size={16} color={Colors.BUTTON_SIGNUP} />
                </View>
                <View>
                    <FlatList
                        data={ingredientText}
                        scrollEnabled={false}
                        contentContainerStyle={{
                            alignItems: "center",
                            marginBottom: 15
                        }}
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }: any) => {
                            return (
                                <View style={{
                                    width: getWeight() * 0.8,
                                    height: getHeight() * 0.06,
                                    backgroundColor: Colors.DEFAULT_IOS_BACKGROUND,
                                    justifyContent: "center",
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    borderColor: Colors.ITEM_BORDER_GRAY,
                                    marginBottom: 3
                                }}>
                                    <View style={{ flex: 0.6, alignItems: "center", justifyContent: "center" }}>
                                        <TextInput
                                            style={{}}
                                            value={item.value}
                                            blurOnSubmit={false}
                                            placeholder="재료 정보를 입력해주세요"
                                            onChangeText={(value) => { handleTextChange(item.id, value) }}
                                        />
                                    </View>
                                    <View style={{ flex: 0.4, flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                                        <TouchableOpacity
                                            style={{
                                                borderRadius: 15,
                                                width: getWeight() * 0.06,
                                                height: '50%',
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginRight: 5,
                                                backgroundColor: Colors.ITEM_ARROW_GRAY
                                            }}>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                        <Text>{ingredientWeight}g</Text>
                                        <TouchableOpacity
                                            style={{
                                                borderRadius: 15,
                                                width: getWeight() * 0.06,
                                                height: '50%',
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginLeft: 5,
                                                backgroundColor: Colors.ITEM_ARROW_GRAY
                                            }}>
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        height: getHeight() * 0.05,
                        width: getWeight() * 0.26,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                        onPress={onPressAddIngrediant}>
                        <Text>재료 추가</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <Margin height={50} />
        </ScrollView>
    )
}