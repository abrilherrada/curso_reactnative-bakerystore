import { StyleSheet } from "react-native";
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 160,
    },
    contentContainer: {
        flex: 1,
        padding: 10,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        height: "100%",
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
        fontSize: 20,
        fontFamily: 'Lora-Bold',
        color: THEME.colors.title,
        lineHeight: 84,
        textAlign: 'center',
        backgroundColor: THEME.colors.primaryTransparent,
    },
});