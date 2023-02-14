import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Orders } from '../screens';

import { THEME } from '../constants/theme';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
        name="Orders"
        component={Orders}
        options={{
          title: 'Pedidos',
        }}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
