import { StyleSheet } from "react-native"
import { colors } from "../../styles/GlobalStyle"

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
})