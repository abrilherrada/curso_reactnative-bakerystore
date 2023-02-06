import React from 'react';
import { View, Text, Button } from 'react-native';
import { theme } from '../../constants/theme';

import { styles } from './styles';

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>
      <Button
        title="Ver información"
        onPress={() => navigation.navigate('ProductDetails')}
        color={theme.colors.secondary}
      />
    </View>
  );
};

export default Products;
