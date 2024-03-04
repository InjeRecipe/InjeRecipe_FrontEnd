import React, { useState } from "react"
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../color/Colors";
import { launchImageLibrary } from "react-native-image-picker";

export const EditViewBody = () => {
    const { getHeight, getWeight } = useDimention()
    const [images, setImages] = useState<Array<any>>([''])
    const [contents, setContents] = useState<Array<any>>([])
    const [text,setText] =useState('')
    const RenderImageItem = ({ item,index }: any) => {
        console.log(item)
        const onPressImagePicker = () => {
            launchImageLibrary({
                mediaType: "photo",
            }, (response: any) => {
                if (response) {
                    setImages(prevData => [...prevData,response.assets[0].uri ])
                }
            })
        }

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
            console.log(item)
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
                        source={{ uri: item }} />
                        
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
        if (item == '') {
            return (<ImageSelectView />)
        }
        else return <SelectedImageView />

    }
    const RenderTextView = ({ item,index }: any) => {
        
        if(item != '') {
            return(
                <View style={{flexDirection:'row',justifyContent:"center",alignItems:"center",marginBottom:10}}>
                            <View style={{
                                alignItems:"center",
                                justifyContent:"center",
                                borderRadius:15,
                                width:15,
                                height:15,
                                marginLeft:-10,
                                marginRight:10,
                                
                            backgroundColor:Colors.ITEM_BORDER_GRAY}}>
                            <Text style={{color:Colors.FONT_WHITE,fontSize:12}}>
                                {index}
                            </Text>
                            </View>
                            
                            <View style={{width:'85%',borderWidth:1,height:getHeight()*0.08,borderRadius:15}}>
                                {/* comment box */}
                                <TextInput 
                                    style={{flex:1}}
                                    value={text}
                                    onChangeText={(value)=>{setText(value)}}
                                />
                            </View>
                        </View>
            )
        }
        else return null
    }
    return (
        <ScrollView style={{
            padding: 20,
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        >
            <View style={{ height: getHeight() * 0.28,  }}>
                <View style={{
                    flex: 0.2,
                    flexDirection: 'row',
                    alignItems: "center",
                    borderBottomWidth: 0.5,
                    borderBottomColor: Colors.ITEM_BORDER_GRAY,
                    marginBottom: 15
                }}>
                    <Text style={{
                        marginRight: 5,
                        color: Colors.BUTTON_SIGNIN,
                        fontWeight:'bold'
                    }}>과정 이미지 추가하기</Text>
                    <Icon name="image-outline" size={16} color={Colors.BUTTON_SIGNUP} />
                </View>
                <View style={{ flex: 0.8, padding: 5 }}>
                    {/* flatlist item view*/}
                    <FlatList
                        data={images}
                        horizontal
                        bounces={false}
                        renderItem={({ item, index }: any) => { return (<RenderImageItem item={item} index={index} />) }} />
                </View>
            </View>
            <View style={{ marginBottom: 15 }}>
                {/* 코멘트 추가 뷰 */}
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 15,
                    marginBottom: 15,
                    height:45,
                    borderBottomWidth: 0.5,
                    borderBottomColor: Colors.ITEM_BORDER_GRAY,
                }}>
                    <Text style={{marginRight:5,color:Colors.BUTTON_SIGNIN,fontWeight:'bold'}}>
                        과정설명
                    </Text>
                    <Icon name="fast-food-outline" size={16} color={Colors.BUTTON_SIGNUP}/>
                </View>
                <View style={{}}>
                    <View style={{width:'100%',marginBottom:15,}}>
                        {/* notice view */}
                        <Text>이미지 번호에 해당하는 과정 설명을 작성해주세요.</Text>
                    </View>
                    <FlatList
                        data={images}
                        bounces={false}
                        scrollEnabled={false}
                        renderItem={({item,index}:any)=>{return(<RenderTextView index={index} item={item}/>)}}
                    />
                    
                </View>
                {/* 제어바 가림 방지용 뷰 */}
                <View style={{height:50,width:100}}/>  
            </View>
            
        </ScrollView>
    )
}