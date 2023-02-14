import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.background,
    },
    listContainer: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 10,
        marginHorizontal: 10,
    },
    footer: {
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 10,
    },
    confirmButton: {
        backgroundColor: THEME.colors.primary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    confirmButtonText: {
        color: THEME.colors.black,
        fontSize: 15,
        fontFamily: 'Lora-SemiBold',
    },
    totalContainer: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totalText: {
        color: THEME.colors.black,
        fontSize: 15,
        fontFamily: 'Lora-SemiBold',
    },
    totalPrice: {
        color: THEME.colors.black,
        fontSize: 15,
        fontFamily: 'Lora-Bold',
    },
});