import React, { useState } from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"
import { Colors } from "../../color/Colors"
import { EditViewHeader } from "./EditViewHeader"
import { EditViewBody } from "./EditViewBody"
import { EditViewImageBody } from "./EditViewImageBody"
import { useRoute } from "@react-navigation/native"
import { useRecipe } from "../../hooks/useReipce"

export const CreateRecipeView = () => {
    const {getHeight} = useDimention()
    
    const [images, setImages] = useState<Array<any>>([''])
    const [inputLenght, setInputLenght] = useState(1);
    const route = useRoute();
    return(
        <SafeAreaView>
            <EditViewHeader next='완료' prev='<' />
            <EditViewImageBody
                images = {images}
                setImages = {setImages}
                inputLenght={inputLenght}
                setInputLenght={setInputLenght}
                
            />
                    <ScrollView style={{
            padding: 20,
        }}
       
        bounces={false}
        showsVerticalScrollIndicator={false}>
            
            <EditViewBody 
                images={images}
                inputLenght={inputLenght}/>
            </ScrollView>
        </SafeAreaView>
    )
}