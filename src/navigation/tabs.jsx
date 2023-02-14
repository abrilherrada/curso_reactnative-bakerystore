import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import CartNavigator from './cart';
import OrdersNavigator from './orders';
import StoreNavigator from './store';

import { THEME } from '../constants/theme';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="StoreTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Lora-SemiBold',
          fontSize: 12,
        },
        tabBarActiveTintColor: THEME.colors.primary,
        tabBarInactiveTintColor: THEME.colors.subtitle,
      }}>
      <BottomTab.Screen
        name="StoreTab"
        component={StoreNavigator}
        options={{
          title: 'Tienda',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'basket' : 'basket-outline'}
              size={22}
              color={focused ? THEME.colors.primary : THEME.colors.subtitle}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: 'Carrito',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={22}
              color={focused ? THEME.colors.primary : THEME.colors.subtitle}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: 'Pedidos',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'file-tray' : 'file-tray-outline'}
              size={22}
              color={focused ? THEME.colors.primary : THEME.colors.subtitle}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
