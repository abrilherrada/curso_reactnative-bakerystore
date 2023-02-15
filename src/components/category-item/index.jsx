import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';

import { styles } from './styles';

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentContainer} onPress={() => onSelected(item)}>
        <ImageBackground
          source={{ uri: item.imageURI }}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <Text style={styles.title}>{item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
