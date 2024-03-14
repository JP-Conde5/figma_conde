import { Image, View, Text } from "react-native";
import { Footer } from '../../components/Footer/index'
import { styles } from "./styles";
import { IPage } from "../../../App";
import { Background } from "../../components";

export function Slide3({setPage, page}:IPage){
    const block = require("../../assets/block_screen3.png");
    const title = require("../../assets/title.png");
    return(
        <Background>
            <View style={styles.primary}>
                <Image source={title}/>
                <Image source={block}/> 
                <Text style={styles.text}>No final, você receberá um certificado e ficará pronto para o mercado de games</Text>
            </View>
            <Footer page={page} setPage={setPage}/>
        </Background>
    )
}