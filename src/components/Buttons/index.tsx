import React from "react";
import { TouchableOpacity, Image } from "react-native";

export function Button(){
    const free = require('../../assets/screen_free.png')
    return(
        <TouchableOpacity><Image source={free}/></TouchableOpacity>
    )
}