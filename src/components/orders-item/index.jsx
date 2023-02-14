import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { formatDate } from '../../utils/index';
import { THEME } from '../../constants/theme';
import { styles } from './styles';

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.date}>{formatDate(item.date)}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <Text style={styles.total}>${item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={22} color={THEME.colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
