import React from "react";
import { styles } from "./styles";
import { TouchableOpacity, Image } from "react-native";

interface IArrow{
    OnPressI: () => void
}

export function Arrow({OnPressI}:IArrow){
    const arrow = require("../../assets/arrow.png");
    return(
        <TouchableOpacity onPress={OnPressI}><Image style={styles.image} source={arrow}/></TouchableOpacity>
    )
}