import { StyleSheet } from "react-native";

import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Lora-Medium',
        marginTop: 5,
        color: THEME.colors.title,
    },
    subLabel: {
        fontSize: 12,
        fontFamily: 'Lora-Medium',
        marginTop: 5,
        color: THEME.colors.subtitle,
    }
});