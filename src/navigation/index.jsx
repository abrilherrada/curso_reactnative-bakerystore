import { NavigationContainer } from '@react-navigation/native';
import StoreNavigator from './store';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StoreNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
