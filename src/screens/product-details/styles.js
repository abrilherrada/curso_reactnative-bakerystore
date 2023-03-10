import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: "Lora-Bold",
    padding: 10,
    color: THEME.colors.title,
  },
  text: {
    fontSize: 14,
    fontFamily: "Lora-Medium",
    padding: 5,
    color: THEME.colors.black,
  },
  price: {
    fontSize: 16,
    fontFamily: "Lora-Bold",
    padding: 5,
    color: THEME.colors.black,
  },
});
