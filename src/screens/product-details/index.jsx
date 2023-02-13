import React from 'react';
import { View, Text } from 'react-native';
import { PRODUCTS } from '../../constants/data';

import { styles } from './styles';

const ProductDetails = ({ navigation, route }) => {
  const { productId, title } = route.params;
  const product = PRODUCTS.find((product) => product.id === productId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.text}>{product.description} </Text>
      <Text style={styles.text}>{product.weight} </Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductDetails;
