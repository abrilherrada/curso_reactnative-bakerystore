import { StyleSheet } from "react-native";

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        borderBottomColor: THEME.colors.primary,
        borderBottomWidth: 1,
        width: '100%',
        fontSize: 14,
        fontFamily: 'Lora-Regular',
        marginBottom: 15,
    },
    message: {
        marginVertical: 5,
    },
    helperText: {
        fontFamily: 'Lora-Medium',
        fontSize: 12,
        color: THEME.colors.error,
    },
});