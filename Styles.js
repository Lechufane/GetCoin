import { StyleSheet } from "react-native";
import { useContext } from "react";

export const GlobalStyles = StyleSheet.create({
    light: {
        backgroundColor: '#e1e1e1',
        color: '#000',
    },
    dark: {
        backgroundColor: '#1e1e1e',
        color: '#fff',
    },
    container: {
        alignItems: 'center',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    title: {
        fontSize: 20,
        marginTop: 10,
    },
    searchInput: {
        borderBottomColor: '#d1d1d1',
        borderBottomWidth: 1,
        textAlign: 'center',
        width: 100,
    },
    text: {
    },
    list: {
        width: '90%',
    },
})