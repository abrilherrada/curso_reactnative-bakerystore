import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const ProductDetails = ({ navigation }) => {
  const product = useSelector((state) => state.products.selected);

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
