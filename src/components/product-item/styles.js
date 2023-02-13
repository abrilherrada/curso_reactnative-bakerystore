import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 110,
        backgroundColor: THEME.colors.secondary,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
    },
    title: {
        fontSize: 17,
        fontFamily: 'Lora-Bold',
        color: THEME.colors.white,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    price: {
        fontFamily: 'Lora-Bold',
        fontSize: 14,
        color: THEME.colors.black,
    },
    weight: {
        fontFamily: 'Lora-Regular',
        fontSize: 14,
        color: THEME.colors.black,
    },
});