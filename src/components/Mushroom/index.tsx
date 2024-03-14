import React from "react";
import { TouchableOpacity, Image, TouchableOpacityProps } from "react-native";
import { IPage } from "../../../App";

export interface Ibutton extends TouchableOpacityProps{
    onPressI: () => void;
    color: boolean;
}

export function Mushroom({onPressI, color} : Ibutton){
    const free = require('../../assets/screen_free.png')
    const select = require('../../assets/screen_select.png')
    return(     
        <TouchableOpacity onPress={onPressI}><Image source={color ? select : free}/></TouchableOpacity>
    )
}