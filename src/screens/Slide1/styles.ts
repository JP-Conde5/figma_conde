import { StyleSheet } from "react-native"; 
import { colors } from '../../styles/GlobalStyle';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
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