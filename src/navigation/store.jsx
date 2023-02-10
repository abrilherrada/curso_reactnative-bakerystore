import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Categories, Products, ProductDetails } from '../screens';

import { THEME } from '../constants/theme';

const Stack = createNativeStackNavigator();

const StoreNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTintColor: THEME.colors.secondary,
        headerTitleStyle: {
          fontFamily: 'Lora-Bold',
          color: THEME.colors.title,
        },
      }}>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ title: 'Categorías' }} /*options={{ headerShown: false }}*/
      />
      <Stack.Screen name="Products" component={Products} options={{ title: 'Productos' }} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ title: 'Información del producto' }}
      />
    </Stack.Navigator>
  );
};

export default StoreNavigator;
