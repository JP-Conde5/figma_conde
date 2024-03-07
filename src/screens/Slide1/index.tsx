import { ImageBackground, Image, View, Text } from "react-native";
import { globalStyle } from "../../styles/GlobalStyle";
import { Footer } from '../../components/Footer/index';
import { styles } from "./styles";
import { IPage } from "../../../App";

export function Slide1({setPage}:IPage){
    const background = require("../../assets/background.png");
    const hammer = require("../../assets/hammer_screen1.png");
    const title = require("../../assets/title.png");
    return(
        <ImageBackground source={background} style={globalStyle.container}> 
            <View style={globalStyle.background}>
                <View style={styles.primary}>
                    <Image source={title}/>
                    <Image source={hammer}/> 
                    <Text style={styles.text}>Aprenda a construir o seu primeiro jogo com a gente</Text>
                </View>
                <Footer/>
            </View>
        </ImageBackground>
    )
}