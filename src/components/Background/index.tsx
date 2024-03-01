import React from "react";
import { ImageBackground, View } from "react-native";
import { styles } from "./styles";

export function Background(){
    const background = require("../../assets/background.png");
    return(
        <ImageBackground source={background} style={styles.container}> 
            <View style={styles.background}/>
        </ImageBackground>
    )
}