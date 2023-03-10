import { StyleSheet } from "react-native";
import { THEME } from "./constants/theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: THEME.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerLoader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: THEME.colors.background,
    },
  });