import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { useRefrigator } from "../../hooks/useRefrigator";
import { useDimention } from "../../hooks/useDimension";
import { refrigatorItem } from "../../data/refrigatorItem";

export function RefrigatorItemView ({postData}:any){
    
    const {data} = refrigatorItem()
    const {getHeight} = useDimention()
    const [renderData,setRenderData] = useState<Array<any>>([])
    console.log("????",renderData)
    useEffect(()=>{
        renderData.length = 0
        data.map(({ingredient, index}:any)=>{
            ingredient.items.map(({value}:any,indexItem:any)=>{
                postData.map((item:any,index:any)=>{
                    if(value == item){
                        console.log('ssas',indexItem)
                        renderData.push(ingredient.items[indexItem])
                    }
                })
            })
        })
    })
    
    return(
        <View style={{flex:1}}>
            <FlatList
                data={renderData}
                scrollEnabled={false}
                style={{padding:15,}}
                numColumns={4}
                renderItem={({item,index}:any)=>{
                    console.log(item)
                    return(
                        <View style={{
                            width: '22%',
                            height: getHeight() * .15,
                            alignItems: 'center',
                            marginBottom: 5,
                            marginRight:15
                            }}>
                            <View 
                                style={{
                                    flex: 0.9,
                                    width: '100%',
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: 5}}>
                                <Image 
                                     source={{uri:item.img}}
                                style={{
                                    
                                    width: 75,
                                    height:75,
                                    
                                    resizeMode:'contain',
                                    flex: 1,
                                    borderRadius: 80,}}/>
                            </View>
                            <Text>{item.value}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}