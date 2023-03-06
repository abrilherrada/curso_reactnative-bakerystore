import { StyleSheet } from "react-native";

import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.colors.background,
    },
    formContainer: {
        minHeight: 295,
        width: '80%',
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: THEME.colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Lora-SemiBold',
        textAlign: 'center',
        color: THEME.colors.title,
        marginBottom: 5,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Lora-Medium',
        marginTop: 5,
        color: THEME.colors.title,
    },
    prompt: {
        width: '100%',
        paddingTop: 10,
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 14,
        fontFamily: 'Lora-Medium',
        color: '#3E90F6',
    },
});