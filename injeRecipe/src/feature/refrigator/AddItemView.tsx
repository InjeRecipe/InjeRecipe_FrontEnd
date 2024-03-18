import React, { useEffect, useState } from "react"
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"


export const AddItemView = ({ item, index,postData,setPostData }: any) => {
    const { getHeight } = useDimention()
    const [num, setNum] = useState(0)
    const itemImage = item
    const items = item.ingredient.items || []
    const ItemRenderView = ({ item, index }: any) => {
        const [selected,setSelected] = useState(false)
        
        const onPressItem = () => {
            
            if(!selected){
                postData.push(item.value)
                console.log(postData)
            }
            setSelected(!selected)
            
        }
        
        return (
            <View style={{
                width: '25%',
                height: getHeight() * .12,
                alignItems: 'center',
                marginBottom: 5}}>
                <TouchableOpacity 
                    style={{
                        flex: 0.9,
                        width: '100%',
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 5}}
                    onPress={()=>{onPressItem()}}>
                    <Image 
                        source={{uri:item.img}}
                    style={{
                        backgroundColor: selected?Colors.SELECTED_ITEM_BACKGROUND:'white',
                        width: 75,
                        height:75,
                        
                        resizeMode:'contain',
                        flex: 1,
                        borderRadius: 80,}}/>
                </TouchableOpacity>
                <Text>{item.value}</Text>
            </View>
        )
    }
    useEffect(() => {
        if (items.length % 4 > 0) {
            setNum(1)
        }
        else setNum(0)
    })
    return (
        <View
            style={{ padding: 10, zIndex: 0 }}
            key={`${item.ingredient[index]}-${index}`}>
            <View style={{
                height: 30,
                justifyContent: "center",
                marginBottom: 10,
                paddingHorizontal: 10}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.ingredient.title}</Text>
            </View>
            <FlatList
                style={{
                    height: 90 * ((items.length / 4) + num)}}
                data={items}
                horizontal={false}
                numColumns={4}
                renderItem={({ item, index }: any) => {
                    return (<ItemRenderView item={item} index={index}/>)}}/>
                    {index==4?
                        <View style={{width:100,height:100}}/>:null
                    }
            
            
        </View>
    )
}