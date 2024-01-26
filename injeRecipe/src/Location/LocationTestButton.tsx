import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Pressable, Text, View } from 'react-native';

export function LocationTestButton (){
const onPressButton = () =>{
    Geolocation.getCurrentPosition(info => console.log(info));
}

    return(
        <View>
            <Pressable onPress={onPressButton}>
                <Text>getLocation</Text>
            </Pressable>
        </View>
    )
}