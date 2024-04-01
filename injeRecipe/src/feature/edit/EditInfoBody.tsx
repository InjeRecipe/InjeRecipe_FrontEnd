import React, { useEffect, useState } from "react"
import { FlatList, Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import Icon from "react-native-vector-icons/Ionicons";
import { Margin } from "../../component/Margin";
import { useRecipe } from "../../hooks/useReipce";


export const EditInfoBody = ({
    
}:any) => {
    const { getWeight, getHeight } = useDimention()
    const {
        setRecipePartsDtls,
        setRecipeNm,
    setRecipeEng
    } = useRecipe()
    const [kcalText, setKcalText] = useState('')
    const [recipeNameText, setRecipeNameText] = useState('')
    const [ingredientText, setIngredientText] = useState([{ id: 1, value: 0, title:'' }]);
    const onPressAddIngrediant = () => {
        const newId = ingredientText[ingredientText.length - 1].id + 1;
        setIngredientText((prevInputs:any) => [...prevInputs, { id: newId, title: '',value:0 }]);
    }
    const handleTextChange = (id: any, text: any) => {
        setIngredientText((prevInputs:any) =>
            prevInputs.map((input:any) =>
                input.id === id ? { ...input, title: text,  } : input
            )
        );
        setRecipePartsDtls(ingredientText)
    };
    const handleWeightChange = (id: any,) => {
        setIngredientText((prevInputs:any) =>
            prevInputs.map((input:any) =>
                input.id === id ? { ...input, value: input.value+5 } : input
            )
        );
    };
   useEffect(()=>{
    setRecipeNm(recipeNameText)
   },[recipeNameText])
   useEffect(()=>{
    setRecipeEng(kcalText)
   },[kcalText])
    
   
    return (
        <>
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
                        }}>레시피 이름을 입력 해주세요</Text>
                    <Icon name="fast-food-outline" size={16} color={Colors.BUTTON_SIGNUP} />
                </View>
                <View style={{
                    backgroundColor: Colors.RECIPENM_INPUT,
                    borderRadius: 20,
                    marginTop: 20,
                    height: '45%',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <TextInput
                        value={recipeNameText}
                        onChangeText={(value) => { 
                            setRecipeNameText(value)      
                         }}
                        style={{
                            width: "60%",
                            color: Colors.FONT_WHITE
                        }}
                        placeholder="레시피 이름을 입력 해주세요."
                        textAlign={'center'}
                        placeholderTextColor={Colors.FONT_WHITE}
                    />
                </View>
            </View>
            
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
                        onChangeText={(value) => { 
                            setKcalText(value)
                            
                         }}
                        style={{
                            width: "60%",
                            color: Colors.FONT_WHITE
                        }}
                        placeholder="0"
                        textAlign={'center'}
                        placeholderTextColor={Colors.FONT_WHITE}
                    />
                    <Text>kcal</Text>
                </View>
            </View>
            
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
                            console.log(index)
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
                                            value={item.title}
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
                                            }}
                                            onPress={()=>{handleWeightChange(item.id)}}
                                            >
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                        <Text>{ingredientText[index].value}g</Text>
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
        </>
    )
}