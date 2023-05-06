import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    light: {
        backgroundColor: '#e1e1e1',
        color: '#000',
    },
    dark: {
        backgroundColor: '#1e1e1e',
        color: '#fff',
    },
    lightSymbol: {
        backgroundColor: '#D1CCCC',
        color: 'violet',
    },
    darkSymbol: {
        backgroundColor: '#000',
    },
    cointainer:{
        display: 'flex',
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    coinTextContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    symbol:{
        color: '#00ff00',
        marginLeft: 10,
        padding: 4,
        alignSelf: 'flex-start',
    },
    priceUp:{
        color: '#00ff00',
        marginLeft: 10,
        padding: 4,
        alignSelf: 'flex-start',
    },
    priceDown:{
        color: '#ff0000',   
        marginLeft: 10,
        padding: 4,
        alignSelf: 'flex-start',
    },
});