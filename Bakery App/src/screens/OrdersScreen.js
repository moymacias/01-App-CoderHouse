import React, { useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useSelector, connect, useDispatch } from "react-redux";
import { getOrders } from "../store/actions/order.action";
import OrderItem from "../components/OrderItem";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleDeleteItem = () => {
    console.log("eliminar");
  };

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
});

export default connect()(OrdersScreen);
