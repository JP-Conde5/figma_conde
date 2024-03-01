import { ImageBackground, Image, View, Text } from "react-native";
import { Footer } from '../../components/Footer/index'
import { styles } from "./styles";

export function Slide3(){
    const background = require("../../assets/background.png");
    const block = require("../../assets/block_screen3.png");
    const title = require("../../assets/title.png");
    return(
        <ImageBackground source={background} style={styles.container}> 
            <View style={styles.background}>
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