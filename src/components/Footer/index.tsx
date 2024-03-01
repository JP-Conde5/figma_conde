import React, { useState } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Footer(){
    const select = require("../../assets/screen_select.png");
    const free = require("../../assets/screen_free.png");
    let [img1, img2, img3] = [free, free, free]
    const [state, setState] = useState(1) 
    if(state == 1){
        img1 = select;
        img2 = free;
        img3 = free;
    }else if (state == 2){
        img1 = free;
        img2 = select;
        img3 = free;
    }else if(state == 3){
        img1 = free;
        img2 = free;
        img3 = select;
    }
    return(
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => {setState(1)}}/><Image source={img1}/></TouchableOpacity>
            <TouchableOpacity onPress={() => {setState(2)}}><Image source={img2}/> </TouchableOpacity>
            <TouchableOpacity onPress={() => {setState(3)}}><Image source={img3}/> </TouchableOpacity>
        </View>
    )
}