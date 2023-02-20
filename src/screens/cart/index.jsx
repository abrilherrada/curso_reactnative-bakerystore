import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { confirmOrder, removeFromCart } from '../../store/actions';
import CartItem from '../../components/cart-item';
import { styles } from './styles';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const onDelete = (id) => {
    dispatch(removeFromCart(id));
  };
  const onConfirmOrder = () => {
    dispatch(confirmOrder(cart, total));
  };
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();

  const Header = () => {
    if (cart.length == 0) {
      return (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>El carrito está vacío.</Text>
        </View>
      );
    }
  };

  const Footer = () => {
    if (cart.length > 0) {
      return (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.confirmButton} onPress={onConfirmOrder}>
            <Text style={styles.confirmButtonText}>Confirmar</Text>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalPrice}>${total}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Header />
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.listContainer}
        />
      </View>
      <Footer />
    </View>
  );
};

export default Cart;
