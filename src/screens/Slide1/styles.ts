import { StyleSheet } from "react-native"; 
import { colors } from '../../styles/GlobalStyle';

export const styles = StyleSheet.create({
    primary: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 0.7,
        width: 300,
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        color: colors.primary,
        fontFamily: 'Coiny_400Regular',
    },
})