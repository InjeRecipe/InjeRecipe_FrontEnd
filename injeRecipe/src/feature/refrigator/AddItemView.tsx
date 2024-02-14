import React, { useEffect, useState } from "react"
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"

export const AddItemView = ({ item, index }: any) => {
    const { getHeight } = useDimention()
    const [num, setNum] = useState(0)
    const items = item.ingredient.items || []
    const ItemRenderView = ({ item, index }: any) => {
        const [selected,setSelected] = useState(false)
        const onPressItem = () => {
            setSelected(!selected)
        }
        return (
            <View style={{
                width: '25%',
                height: getHeight() * .11,
                alignItems: 'center',
                marginBottom: 5
            }}>
                <TouchableOpacity style={{
                    flex: 0.8,
                    width: '100%',
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 5
                }}
                    onPress={onPressItem}>
                    <Image style={{
                        backgroundColor: selected?Colors.SELECTED_ITEM_BACKGROUND:'white',
                        width: '65%',
                        flex: 1,
                        borderRadius: 80,

                    }} />
                </TouchableOpacity>

                <Text>{item}</Text>
            </View>
        )
    }
    const a = []
    
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
                    return (
                        <ItemRenderView item={item} />
                    )
                }}
            />
        </View>
    )
}