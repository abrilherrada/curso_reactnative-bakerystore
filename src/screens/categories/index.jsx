import React from 'react';
import { View, Text, Button } from 'react-native';
import { theme } from '../../constants/theme';

import { styles } from './styles';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías</Text>
      <Button
        title="Ver productos"
        onPress={() => navigation.navigate('Products')}
        color={theme.colors.secondary}
      />
    </View>
  );
};

export default Categories;
