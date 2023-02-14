import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cart } from '../screens';

import { THEME } from '../constants/theme';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.colors.white,
        },
        headerTintColor: THEME.colors.primary,
        navigationBarColor: THEME.colors.black,
        headerTitleStyle: {
          fontFamily: 'Lora-Bold',
          color: THEME.colors.title,
        },
      }}>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Carrito',
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
