import { View } from "react-native";
import { styles } from "./styles";
import { Buttons } from "../Buttons"
import { IPage } from "../../../App";

export function Footer({setPage, page}:IPage){
    const select = require("../../assets/screen_select.png");
    const free = require("../../assets/screen_free.png");
    return(
        <View style={styles.footer}>
            <Buttons page={page} setPage={setPage} />
        </View>
    ) 
}
