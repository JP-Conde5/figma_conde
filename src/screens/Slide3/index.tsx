import { ImageBackground, Image, View, Text } from "react-native";
import { Footer } from '../../components/Footer/index'
import { styles } from "./styles";
import { globalStyle } from "../../styles/GlobalStyle";
import { IPage } from "../../../App";

export function Slide3({setPage}:IPage){
    const background = require("../../assets/background.png");
    const block = require("../../assets/block_screen3.png");
    const title = require("../../assets/title.png");
    return(
        <ImageBackground source={background} style={globalStyle.container}> 
            <View style={globalStyle.background}>
                <View style={styles.primary}>
                    <Image source={title}/>
                    <Image source={block}/> 
                    <Text style={styles.text}>No final, você receberá um certificado e ficará pronto para o mercado de games</Text>
                </View>
                <Footer/>
            </View>
        </ImageBackground>
    )
}