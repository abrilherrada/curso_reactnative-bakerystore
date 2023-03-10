import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentContainer} onPress={() => onSelected(item)}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{ uri: item.imageURI }} resizeMode="cover" style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.weight}>x {item.weight}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
