import React, { useCallback, useMemo, useRef, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { RefrigatorHeader } from "./RefrigatorHeader";
import { RefrigatorAiButton } from "./RefrigatorAiButton";
import { RefrigatorItemView } from "./RefrigatorItemView";
import { AddItemModalView } from "./AddItemModalView";
import BottomSheet,{
    BottomSheetModal,
    BottomSheetModalProvider,
  } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";
  
export function RefrigatorView(){
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['1%', '80%'], []);
    const [isExpanded,setIsExpanded] = useState(false)
    // variables
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
      }, []);
      const handlePresentModalPress = () => {
        console.log('???',isExpanded)
        if(isExpanded){bottomSheetModalRef.current?.expand()}
        else {bottomSheetModalRef.current?.close()}
        setIsExpanded(!isExpanded)
        
      };
    const BackDropView = () => {
        return(
            
            <SafeAreaView style={{flex:1}}>
            <View style={{flex:0.06,backgroundColor:'red'}}>
                <RefrigatorHeader
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
            <View style={{position:'absolute',backgroundColor:'#00000070',width:1000,height:1000,}}>
            {/* 필름뷰 트리거 달아주기 */}
            </View>
        </SafeAreaView>
        
        )
    }
    return(
    <GestureHandlerRootView style={{flex:1}}>
        <BottomSheetModalProvider>
        <BottomSheet
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                backdropComponent={BackDropView}
                backgroundStyle={{backgroundColor:"white"}}
            >
                </BottomSheet>
        </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}