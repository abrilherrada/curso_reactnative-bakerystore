import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Categories, Products, ProductDetails } from '../screens';

const Stack = createNativeStackNavigator();

const StoreNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
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
