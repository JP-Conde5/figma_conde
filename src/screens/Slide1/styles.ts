import { StyleSheet } from "react-native"; 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: 'rgba(165, 210, 225, 0.7)',
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
        color: 'rgb(255, 236, 64)',
        fontFamily: ''
    },
})