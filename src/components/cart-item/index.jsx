import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { THEME } from '../../constants/theme';

import { styles } from './styles';

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{item.title}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.content}>
          <Text style={styles.quantity}>x {item.quantity}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={22} color={THEME.colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
