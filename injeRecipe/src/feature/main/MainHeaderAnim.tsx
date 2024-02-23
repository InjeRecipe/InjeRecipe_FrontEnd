import React, { useEffect, useMemo, useRef, useState } from "react"
import { Animated, PanResponder, Text, View } from "react-native"
import { useWeather } from "../../hooks/useWeather"
import { useDimention } from "../../hooks/useDimension"
import { useSelector } from "react-redux"
import { RootReducerState } from "../../redux/store"

export const MainHeaderAnim = () => {
   
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder:()=>true,
        onPanResponderMove:(evt,gestureState) => {
            // console.log(gestureState)
        },
    })
    
   

 
    return (
        null

    )
}