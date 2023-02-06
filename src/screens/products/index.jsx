import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Productos</Text>
      <Button
        title="Ver información"
        onPress={() => navigation.navigate('ProductDetails')}
        color="#000"
      />
    </View>
  );
};

export default Products;
