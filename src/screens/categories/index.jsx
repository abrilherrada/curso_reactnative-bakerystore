import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { CATEGORIES } from '../../constants/data/index';

import { styles } from './styles';
import { CategoryItem } from '../../components';

const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate('Products', {
      categoryId: item.id,
      title: item.title,
    });
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
    </SafeAreaView>
  );
};

export default Categories;
