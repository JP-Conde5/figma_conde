import { Image, View, Text } from "react-native";
import { Background } from "../../components";
import { Footer } from '../../components/Footer/index';
import { styles } from "./styles";
import { IPage } from "../../../App";

export function Slide1({page, setPage}:IPage){
    const hammer = require("../../assets/hammer_screen1.png");
    const title = require("../../assets/title.png");
    return(
        <Background>
            <View style={styles.primary}>
                <Image source={title}/>
                <Image style={styles.image} source={hammer}/> 
                <Text style={styles.text}>Aprenda a construir o seu primeiro jogo com a gente</Text>
            </View>
            <Footer page={page} setPage={setPage}/>
        </Background>
    )
}