import { ImageBackground, Image, View, Text } from "react-native";
import React from "react";
import { globalStyle } from "../styles/GlobalStyle";
import { Footer } from '../components/Footer/index';
import { IPage } from "../../App";
import { Slide1 } from "./Slide1";

export function Slide({page, setPage}:IPage){
    const background = require("../../assets/background.png");
    const hammer = require("../../assets/hammer_screen1.png");
    const title = require("../../assets/title.png");
    return(
        <ImageBackground source={background} style={globalStyle.container}> 
            <Slide1/>
            <Footer page={page} setPage={setPage}/>
        </ImageBackground>
    )
}