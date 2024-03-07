import { View } from "react-native";
import { styles } from "./styles";
import { Button } from "../Buttons"
import { IPage } from "../../../App";

export function Footer({setPage}:IPage){
    const select = require("../../assets/screen_select.png");
    const free = require("../../assets/screen_free.png");
    let [img1, img2, img3] = [select, free, free]
    return(
        <View style={styles.footer}>
            <Button onPress={() => setPage(1)}/>
            <Button onPress={() => setPage(2)}/>
            <Button onPress={() => setPage(3)}/>
        </View>
    ) 
}
