import { ImageBackground, View } from "react-native";
import React from "react";
import { styles } from "./styles";

export interface IBackground{
    children: React.ReactNode
}

export function Background({children}:IBackground){
    const background = require("../../assets/background.png");
    return(
        <ImageBackground source={background} style={styles.container}> 
            <View style={styles.background}>
                {children}
            </View>
        </ImageBackground>
    )
}