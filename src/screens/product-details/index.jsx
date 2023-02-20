import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../../store/actions';
import { THEME } from '../../constants/theme';
import { styles } from './styles';

const ProductDetails = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const add = () => {
    dispatch(addToCart(product));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product?.title}</Text>
      <Text style={styles.text}>{product?.description} </Text>
      <Text style={styles.text}>{product?.weight} </Text>
      <Text style={styles.price}>${product?.price}</Text>
      <Button title="Add to cart" onPress={add} color={THEME.colors.primary} />
    </View>
  );
};

export default ProductDetails;
