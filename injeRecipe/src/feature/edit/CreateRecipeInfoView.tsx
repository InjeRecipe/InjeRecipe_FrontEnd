import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import { EditViewHeader } from "./EditViewHeader"
import { EditInfoBody } from "./EditInfoBody"

export const CreateRecipeInfoView =() => {
    return(
        <SafeAreaView>
            <EditViewHeader next='다음' prev='<'/>
            <EditInfoBody/>
        </SafeAreaView>
    )
}