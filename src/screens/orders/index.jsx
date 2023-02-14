import { View, Text, FlatList } from 'react-native';

import OrderItem from '../../components/orders-item';
import { ORDERS } from '../../constants/data/orders';
import { styles } from './styles';

const Orders = ({ navigation }) => {
  const onDelete = (id) => {};
  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
    </View>
  );
};

export default Orders;
