import { ImageBackground, Image, View, Text } from "react-native";
import { Footer2 } from '../../components/Footer/index'
import { styles } from "./styles";

export function Slide1(){
    const background = require("../../assets/background.png");
    const money = require("../../assets/money_screen2.png");
    const title = require("../../assets/title.png");
    return(
        <ImageBackground source={background} style={styles.container}> 
            <View style={styles.background}>
                <View style={styles.primary}>
                    <Image source={title}/>
                    <Image source={money}/> 
                    <Text style={styles.text}>Aprenda a construir o seu primeiro jogo com a gente</Text>
                </View>
                <Footer2/>
            </View>
        </ImageBackground>
    )
}