import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { IPage } from "../../../App";

export function Buttons({setPage, page} : IPage){
    const free = require('../../assets/screen_free.png')
    const select = require('../../assets/screen_select.png')
    return(
        <>       
            <TouchableOpacity onPress={() => setPage(1)}><Image source={page == 1 ? select : free}/></TouchableOpacity>
            <TouchableOpacity onPress={() => setPage(2)}><Image source={page == 2 ? select : free}/></TouchableOpacity>
            <TouchableOpacity onPress={() => setPage(3)}><Image source={page == 3 ? select : free}/></TouchableOpacity>
        </>
    )
}