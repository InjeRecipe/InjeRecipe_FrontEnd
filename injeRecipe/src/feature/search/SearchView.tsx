import React, { useState } from "react";
import { Keyboard, SafeAreaView, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { Header } from "../../component/Header";
import { SearchHeader } from "./SearchHeader";
import { useDimention } from "../../hooks/useDimension";
import { SearchBox } from "./SearchBox";
import { Margin } from "../../component/Margin";
import { SearchBody } from "./SearchBody";
import { LoadingIndicaotrView } from "../../component/LoadingIndicatorView";


export function SearchView(){
    const{getHeight} = useDimention()
    const height = getHeight()
    const [text,setText] = useState('')
    const [searchItem,setSearchItem] = useState()
    const [isLoding,setIsLoading] = useState(false)
    return(
        // <TouchableWithoutFeedback
        // style={{backgroundColor:'yellow'}} 
        // onPress={Keyboard.dismiss}>
        // </TouchableWithoutFeedback>
        <SafeAreaView style={{flex:1,}}>
        
            <View style={{height:height*0.05}}>
                {/* header 검색 뷰 */}
            <SearchHeader/>
            </View>
            <Margin height={10}/>
            <View style={{height:height*0.05}}>
                <SearchBox searchItem={searchItem} setSearchItem={setSearchItem}/>
            </View>
            
            <View style={{flex:1,width:'100%'}}>
                <SearchBody searchItem={searchItem} setSearchItem={setSearchItem} setIsLoading={setIsLoading}/>
            </View>
            {isLoding?<LoadingIndicaotrView/>:null}
        </SafeAreaView>
        
    )
}