import React, { useEffect, useState } from "react"
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"


export const AddItemView = ({ 
    item,
    index,
    postData,
    selectedIndex,}: any) => {
    const { getHeight } = useDimention()
    const [num, setNum] = useState(0)
    const items = item.ingredient.items || []
    const ItemRenderView = ({ item, index }: any) => {
        const [selected,setSelected] = useState(false)
        const [iconBgColor,setIconBgColor] = useState(Colors.SELECTED_ITEM_BACKGROUND)
        useEffect(()=>
        {
            console.log(item.img)
            let flag = false
            selectedIndex.map((value:any,i:any)=>{
                if(value == index && postData.includes(item.value)) {
                    console.log('check',index)
                    setSelected(true)
                    flag= true
                }
                
            })
            if(selected){console.log(selected, item.value)}
            
        },[])
        useEffect(()=>{
            if(selected)
            {
                setIconBgColor(Colors.SELECTED_ITEM_BACKGROUND)
            }
            else{
                setIconBgColor(Colors.FONT_WHITE)
            }
        },[selected])
        const onPressItem = () => {
            
            if(!selected){
                postData.push(item.value)
                selectedIndex.push(index)
                console.log(selectedIndex)
            }
            else if(selected){
                postData.map((value:any,i:any)=>{
                    if(value == item.value){
                        console.log('??')
                        postData.splice(i,1)
                        selectedIndex.splice(i,1)
                    }
                })
             
                console.log(postData)
            }
            setSelected(!selected)
            
        }
        
        return (
            <View style={{
                width: '25%',
                height: getHeight() * .12,
                alignItems: 'center',
                marginBottom: 5,}}>
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
                        backgroundColor:iconBgColor,
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
                paddingHorizontal: 10,
                }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.ingredient.title}</Text>
            </View>
            <FlatList
                style={{
                    height: 90 * ((items.length / 3) + num),}}
                data={items}
                horizontal={false}
                numColumns={4}
                renderItem={({ item, index }: any) => {
                    return (<ItemRenderView item={item} index={index}/>)}}/>
                    {index==4?
                        <View style={{width:100,height:100,}}/>:null
                    }
            
            
        </View>
    )
}