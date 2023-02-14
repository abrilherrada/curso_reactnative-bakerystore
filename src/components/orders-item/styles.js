import { StyleSheet } from "react-native";

import {THEME} from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 80,
        width: 350,
        backgroundColor: THEME.colors.primary,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        margin: 10,
        padding: 10,
    },
    date: {
        fontSize: 16,
        fontFamily: 'Lora-Bold',
        color: THEME.colors.title,
        marginBottom: 5,
    },
    bodyContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    total: {
        fontSize: 14,
        fontFamily: 'Lora-SemiBold',
        color: THEME.colors.text,
    },
});