import React, { useEffect, useMemo } from "react"
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import Icon from "react-native-vector-icons/Ionicons";
import { launchImageLibrary } from "react-native-image-picker";
import { EditViewBody } from "./EditViewBody";
import { useRecipe } from "../../hooks/useReipce";

export const EditViewImageBody = ({
    images,
    inputLenght,
    setInputLenght,
    setImages,
}:any) => {
    const {getHeight,getWeight} = useDimention()
    const {
        setRecipeImages,
        } = useRecipe()
    const onPressImagePicker = () => {
        launchImageLibrary({
            mediaType: "photo",
        }, (response: any) => {
            if (response && !response.didCancel) {
                const newId = inputLenght+ 1;
                
                setInputLenght(newId);
                setImages((prevData:any) => [...prevData,
                    {
                        name:response.assets[0].fileName,
                        uri:response.assets[0].uri,
                        type:response.assets[0].type,
                    }
                 ])
                
                 
            }
        })
        
    }
    useEffect(()=>{
        setRecipeImages(images)
    },[images])
    return(
<View style={{ height: getHeight() * 0.28,  }}>
                <View style={{
                    flex: 0.2,
                    flexDirection: 'row',
                    alignItems: "center",
                    borderBottomWidth: 0.5,
                    borderBottomColor: Colors.ITEM_BORDER_GRAY,
                    marginBottom: 15}}>
                    <Text style={{
                        marginRight: 5,
                        color: Colors.BUTTON_SIGNIN,
                        fontWeight:'bold'}}>
                        과정 이미지 추가하기</Text>
                    <Icon name="image-outline" size={16} color={Colors.BUTTON_SIGNUP} />
                </View>
                <View style={{ flex: 0.8, padding: 5 }}>
                    {/* flatlist item view*/}
                    <FlatList
                        data={images}
                        horizontal
                        bounces={false}
                        renderItem={({ item, index }: any) => { 
                            const ImageSelectView = () => {
                                return (
                                    <TouchableOpacity style={{
                                        borderWidth: 0.4,
                                        borderRadius: 10,
                                        borderColor: Colors.ITEM_ARROW_GRAY,
                                        width: getWeight() * 0.3,
                                        height: getHeight() * 0.17,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: Colors.SEPARATED_LINE,
                                        marginRight:5,
                                    }}
                                        onPress={onPressImagePicker}>
                                        <View style={{
                                            borderRadius: 15,
                                            width: 30,
                                            height: 30,
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Icon name="add" size={16} color={Colors.ITEM_BORDER_GRAY} />
                                        </View>
                    
                                    </TouchableOpacity>
                                )
                            }
                            const SelectedImageView = () => {
                                return (
                                    <View>
                                    <View
                                        style={{
                                            borderWidth: 0.4,
                                            borderRadius: 10,
                                            borderColor: Colors.ITEM_ARROW_GRAY,
                                            width: getWeight() * 0.3,
                                            height: getHeight() * 0.17,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: Colors.SEPARATED_LINE,
                                            marginRight: 5
                                        }}>
                                        <Image
                                            style={{
                                                borderRadius: 10,
                                                width: getWeight() * 0.3,
                                                height: getHeight() * 0.17,
                                            }}
                                            source={{ uri: item.uri }} />
                                            
                                    </View>
                                    <View style={{
                                        alignSelf:"center",
                                        alignItems:"center",
                                        justifyContent:"center",
                                        backgroundColor:Colors.ITEM_BORDER_GRAY,
                                        borderRadius:15,
                                        width:15,
                                        height:15,
                                        marginTop:3}}>
                                            <Text style={{
                                                fontSize:12,
                                                color:'white'
                                        }}>{index}</Text>
                                    </View>
                                    
                                    </View>
                                )
                            }
                            
                           
                            if (index == 0) {
                                return (<ImageSelectView />)
                            }
                            else return <SelectedImageView />}} />
                </View>
               
            
            </View>
    )
}

