import React from "react";
import { Keyboard, SafeAreaView, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { Header } from "../../component/Header";
import { SearchHeader } from "./SearchHeader";
import { useDimention } from "../../hooks/useDimension";
import { SearchBox } from "./SearchBox";
import { Margin } from "../../component/Margin";


export function SearchView(){
    const{getHeight} = useDimention()
    const height = getHeight()
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
            <View style={{height:height*0.05}}>
                {/* header 검색 뷰 */}
            <SearchHeader/>
            </View>
            <Margin height={10}/>
            <View style={{height:height*0.05}}>
                <SearchBox/>
            </View>
            <ScrollView style={{borderWidth:1}}>
                {/* 검색 결과 띄우는 뷰 */}
                <View style={{height:200}}> 

                </View>
            </ScrollView>
        </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}