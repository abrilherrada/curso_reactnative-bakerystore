import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';

import AppNavigator from './navigation';

import { styles } from './styles';

const App = () => {
  const [loaded] = useFonts({
    'Lora-Regular': require('../assets/fonts/Lora-Regular.ttf'),
    'Lora-Medium': require('../assets/fonts/Lora-Medium.ttf'),
    'Lora-SemiBold': require('../assets/fonts/Lora-SemiBold.ttf'),
    'Lora-Bold': require('../assets/fonts/Lora-Bold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return <AppNavigator />;
};

export default App;
