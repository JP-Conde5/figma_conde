import { ImageBackground, Image, View, Text } from "react-native";
import { Footer } from '../../components/Footer/index';
import { Background } from '../../components/index'
import { styles } from "./styles";

export function Slide1(){
    const background = require("../../assets/background.png");
    const hammer = require("../../assets/hammer_screen1.png");
    const title = require("../../assets/title.png");
    return(
        <ImageBackground source={background} style={styles.container}> 
            <View style={styles.background}>
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