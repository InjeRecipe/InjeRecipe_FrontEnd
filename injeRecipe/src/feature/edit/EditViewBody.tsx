import React, { useCallback, useEffect, useMemo, useState } from "react"
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../color/Colors";
import { launchImageLibrary } from "react-native-image-picker";
import { useRecipe } from "../../hooks/useReipce";

export const EditViewBody = ({
    images,
    inputLenght,
}:any) => {
    const { getHeight, getWeight } = useDimention()
    const [text, setText] = useState([{ id: 1, value: '' }]);
    const {setRecipeManuals} = useRecipe()
    const handleTextChange = (id: any, word: any) => {
        setTimeout(()=>{
            setText(prevTexts => prevTexts.map(text => text.id === id ? { ...text, value: word } : text));
        })
        
        
    }
   useEffect(()=>{
    console.log(inputLenght)
    console.log(images.length)
    if(inputLenght>=2)
    {
    const newId = inputLenght
        
    setText((prevInputs:any)=> [...prevInputs, { id: newId, value:'' }])
}
   },[inputLenght])
   useEffect(()=>{
    setRecipeManuals(text)
   },[text])
    return (

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
                        data={text}
                        bounces={false}
                        scrollEnabled={false}
                        renderItem={({item,index}:any)=>{
                                console.log(text)
                                if(index>0){
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
                                                    {text[index-1].id}
                                                </Text>
                                                </View>
                                                <View style={{width:'85%',borderWidth:1,height:getHeight()*0.08,borderRadius:15}}>
                                                    {/* comment box */}
                                                    <TextInput 
                                                        style={{flex:1}}
                                                        value={text[index-1].value}
                                                        onChangeText={(word)=>handleTextChange(text[index-1].id,word)}
                                                    />
                                                </View>
                                            </View>
                                    
                                )
                            
                        }
                        else return null
                    }
                    }
                       
                    />
                    
                </View>
                {/* 제어바 가림 방지용 뷰 */}
                <View style={{height:50,width:100}}/>  
            </View>
            
        
    )
}