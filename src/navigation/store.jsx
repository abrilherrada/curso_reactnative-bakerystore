import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Categories, Products, ProductDetails } from '../screens';

import { THEME } from '../constants/theme';

const Stack = createNativeStackNavigator();

const StoreNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.colors.white,
        },
        headerTintColor: THEME.colors.secondary,
        navigationBarColor: THEME.colors.primary,
        headerTitleStyle: {
          fontFamily: 'Lora-Bold',
          color: THEME.colors.title,
        },
      }}>
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ title: 'Información del producto' }}
      />
    </Stack.Navigator>
  );
};

export default StoreNavigator;
