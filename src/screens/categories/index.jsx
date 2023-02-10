import React from 'react';
import { View, Text, Button } from 'react-native';
import { THEME } from '../../constants/theme';

import { styles } from './styles';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías</Text>
      <Button
        title="Ver productos"
        onPress={() => navigation.navigate('Products')}
        color={THEME.colors.secondary}
      />
    </View>
  );
};

export default Categories;
