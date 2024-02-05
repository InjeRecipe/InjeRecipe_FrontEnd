import { Dimensions } from "react-native"

export const useDimention = () =>{
    const getHeight = () =>{
        return Dimensions.get("screen").height
    }
    return{
        getHeight
    }
}