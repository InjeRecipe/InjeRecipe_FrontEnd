import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import { EditViewHeader } from "./EditViewHeader"
import { EditViewBody } from "./EditViewBody"

export const CreateRecipeView = () => {
    const {getHeight} = useDimention()
    return(
        <SafeAreaView>
            <EditViewHeader/>
            <EditViewBody/>
            
        </SafeAreaView>
    )
}