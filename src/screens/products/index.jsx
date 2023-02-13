import React from 'react';
import { View, Text, Button } from 'react-native';
import { THEME } from '../../constants/theme';

import { styles } from './styles';

const Products = ({ navigation, route }) => {
  const { categoryId, title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>
      <Button
        title="Ver información"
        onPress={() => navigation.navigate('ProductDetails')}
        color={THEME.colors.secondary}
      />
    </View>
  );
};

export default Products;
