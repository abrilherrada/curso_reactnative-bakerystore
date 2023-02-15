import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 30,
        marginVertical: 10,
        height: 240,
        backgroundColor: THEME.colors.primarySoft,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Lora-Bold',
        color: THEME.colors.title,
        paddingBottom: 10,
    },
    image: {
        height: "70%",
        width: "100%",
        alignSelf: "center",
        padding: 10,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
    },
    price: {
        fontFamily: 'Lora-Bold',
        fontSize: 15,
        color: THEME.colors.black,
    },
    weight: {
        fontFamily: 'Lora-Medium',
        fontSize: 15,
        color: THEME.colors.black,
    },
});