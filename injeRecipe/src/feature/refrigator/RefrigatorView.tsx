import React, { useCallback, useMemo, useRef, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { RefrigatorHeader } from "./RefrigatorHeader";
import { RefrigatorAiButton } from "./RefrigatorAiButton";
import { RefrigatorItemView } from "./RefrigatorItemView";

import BottomSheet,{
    BottomSheetFlatList,
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetScrollView,
  } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRefrigator } from "../../hooks/useRefrigator";
import { AddItemView } from "./AddItemView";
import { Colors } from "../../color/Colors";
  
export function RefrigatorView(){
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['10%', '90%'], []);
    const [isExpanded,setIsExpanded] = useState(true)
    const {foods} =useRefrigator()
    // variables
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
      }, []);
      const handlePresentModalPress = () => {
        
        if(isExpanded){bottomSheetModalRef.current?.snapToIndex(1)}
        else {bottomSheetModalRef.current?.close()}
        console.log(isExpanded)
        setIsExpanded(!isExpanded)
        
      };
    const BackDropView = () => {
        return(
            
            <SafeAreaView style={{flex:1}}>
            <View style={{flex:0.06,backgroundColor:'red'}}>
                <RefrigatorHeader
                    title="나의 냉장고"
                    left={false}
                    right={true} 
                    handlePresentModalPress={handlePresentModalPress}/>    
            </View>
            <View style={{flex:0.94}}>
                <View style={{borderWidth:1,flex:0.85}}>
                    {/* item view */}
                    <RefrigatorItemView/>
                    
                </View>
                <View style={{flex:0.15}}>
                    {/* button view */}
                    <RefrigatorAiButton/>
                </View>
                
            </View>
            {isExpanded?null:<View style={{position:'absolute',backgroundColor:'#00000070',width:1000,height:1000,}}/>}
            {/* 필름뷰 트리거 달아주기 */}
            
        </SafeAreaView>
        
        )
    }
    const ListHeaderComponent = () =>{
        return(
            <View style={{
                borderColor:Colors.SEPARATED_LINE,
                borderBottomWidth:1,
                height:65,
                justifyContent:"center",
                paddingHorizontal:10}}>
                <Text style={{fontSize:22,fontWeight:'bold'}}>쟤료 추가하기</Text>
            </View>
        )
    }
    const ListFooterComponent = () => {
        return(
            <View style={{
                width:'80%',
                position:'absolute',
                bottom:0,
                alignItems:"center",
                alignSelf:"center",
                justifyContent:"center",
                height:50,
            }}>
                <Pressable style={{
                    width:'100%',
                    height:'100%',
                    borderRadius:25,
                    alignItems:"center",
                    justifyContent:"center",
                    backgroundColor:Colors.REFRIGATOR_AI_BUTTON}}
                    onPress={handlePresentModalPress}> 
                    <Text style={{color:Colors.FONT_WHITE,fontSize:18,fontWeight:'bold' }}>
                        확인
                    </Text>
                </Pressable>
            </View>
        )
    }
    return(
    <GestureHandlerRootView style={{flex:1}}>
        <BottomSheetModalProvider>
        <BottomSheet
                ref={bottomSheetModalRef}
                index={-1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                backdropComponent={BackDropView}
                backgroundStyle={{backgroundColor:"white"}}>
                    <BottomSheetFlatList
                        data={foods}
                        keyExtractor={(item)=>item.ingredient.title}
                        renderItem={({item,index})=>{return(<AddItemView item={item}index={index}/>)}}
                        ListHeaderComponent={ListHeaderComponent}/>
                   <ListFooterComponent/>
                </BottomSheet>
        </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}