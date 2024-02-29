import { ImageBackground, View, Image, Text } from "react-native";
import { styles } from "./styles";

export function Slide2(){
    const background = require("../../assets/background.png");
    const money = require("../../assets/money_screen2.png");
    const title = require("../../assets/title.png");
    return(
        <ImageBackground source={background} style={styles.container}> 
            <View style={styles.background}>
                <View style={styles.primary}>
                    <Image style={styles.image} source={title}/>
                    <Image style={styles.image} source={money}/> 
                    <Text style={styles.text}>Aprenda a construir o seu primeiro jogo com a gente</Text>
                </View>
            </View>
        </ImageBackground>
    )
}