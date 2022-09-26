import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components/atoms';
import {CartItem, Header} from '../../components/moleculs';
import {cartListJson} from '../../json';
import {colors, fonts} from '../../utils';

const Cart = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Shopping Cart"
        onLeft="chevronLeft"
        onRight="trash"
        handleLeft={() => navigation.goBack()}
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {cartListJson.data.map(item => (
          <CartItem
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            qty={item.qty}
          />
        ))}
      </ScrollView>
      <View style={styles.bottomPage}>
        <View style={styles.amount}>
          <Text style={styles.totalItem}>Total 2 Items</Text>
          <Text style={styles.totalPrice}>USD 999</Text>
        </View>
        <Button title="Proceed to Checkout" icon="checkout" />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    flex: 1,
    paddingTop: 33,
    paddingHorizontal: 24,
  },
  bottomPage: {
    paddingTop: 24,
    paddingBottom: 33,
    paddingHorizontal: 24,
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  totalItem: {
    fontSize: 12,
    fontFamily: fonts.primary.medium,
    color: colors.text.tertiary,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: fonts.primary.bold,
    color: colors.text.primary,
  },
});
