import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { ProductItem } from '../../components';

import { PRODUCTS } from '../../constants/data/index';
import { THEME } from '../../constants/theme';

import { styles } from './styles';

const Products = ({ navigation, route }) => {
  const { categoryId, title } = route.params;

  const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);
  const onSelected = (item) => {
    navigation.navigate('ProductDetails', {
      productId: item.id,
      title: item.title,
    });
  };
  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
    </SafeAreaView>
  );
};

export default Products;
