import { StyleSheet } from "react-native"; 
import { colors } from '../../styles/GlobalStyle';

export const styles = StyleSheet.create({
    primary: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: 300,
    },
    image:{
        marginBottom: 30,
        marginTop: 50,
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        color: colors.primary,
        fontFamily: 'Coiny_400Regular',
    },
})