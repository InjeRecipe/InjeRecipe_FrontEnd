import BottomSheet,{ BottomSheetFlatList, BottomSheetModalProvider, } from "@gorhom/bottom-sheet"
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types"
import React, { useCallback, useMemo } from "react"
import { View,Text, SafeAreaView } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import Modal from 'react-native-modal'

type props = {
    bottomSheetModalRef:React.RefObject<BottomSheetModalMethods>
}
export function AddItemModalView({bottomSheetModalRef}:props){
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
      }, []);
      const snapPoints = useMemo(() => ['25%', '50%'], []);
    return(
        <BottomSheetModalProvider>
        <GestureHandlerRootView>
            <BottomSheet
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >

            </BottomSheet>
        </GestureHandlerRootView>
        </BottomSheetModalProvider>
    )
}