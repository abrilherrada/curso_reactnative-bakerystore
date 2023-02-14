import { StyleSheet } from "react-native";

import {THEME} from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        height: 100,

    },
    header: {
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
    content: {
        alignItems: 'center',
    },
    quantity: {
        fontSize: 14,
        fontFamily: 'Lora-Medium',
        color: THEME.colors.text,
    },
    price: {
        fontSize: 15,
        fontFamily: 'Lora-Bold',
        color: THEME.colors.text,
    },
});