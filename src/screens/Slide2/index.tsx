import { Image, View, Text } from "react-native";
import { Footer } from '../../components/Footer/index'
import { Background } from "../../components";
import { styles } from "./styles";
import { IPage } from "../../../App";

export function Slide2({setPage, page}:IPage){
    const money = require("../../assets/money_screen2.png");
    const title = require("../../assets/title.png");
    return(
        <Background>
            <View style={styles.primary}>
                <Image source={title}/>
                <Image style={styles.image} source={money}/> 
                <Text style={styles.text}>O curso é para todas os níveis e totalmente gratuito</Text>
            </View>
            <Footer page={page} setPage={setPage}/>
        </Background>
    )
}