import { Dimensions } from "react-native"

export const useDimention = () =>{
    const getHeight = () =>{
        return Dimensions.get("screen").height
    }
    const getWeight = () => {
        return  Dimensions.get("screen").width
    }
    return{
        getHeight,
        getWeight
    }
}