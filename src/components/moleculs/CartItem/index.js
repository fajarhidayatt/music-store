import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import dummy from '../../../assets/dummy';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const CartItem = ({title, price, image, qty}) => {
  const [qtyItem, setQtyItem] = useState(qty);
  const [priceItem, setPriceItem] = useState(price);
  const img = dummy[image] || dummy.dummyHeadphone;

  useEffect(() => {
    setPriceItem(qtyItem * price);
  }, [qtyItem]);

  const handleIncrement = () => {
    setQtyItem(item => item + 1);
  };

  const handleDecrement = () => {
    if (qtyItem !== 1) {
      setQtyItem(item => item - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={img} style={styles.image} />
      </View>
      <View style={styles.product}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{`USD ${priceItem}`}</Text>
        </View>
        <View style={styles.qtyWrapper}>
          <Button type="btnIcon" icon="minus" onPress={handleDecrement} />
          <Text style={styles.qty}>{qtyItem}</Text>
          <Button type="btnIcon" icon="plus" onPress={handleIncrement} />
        </View>
      </View>
      <View style={styles.iconWrapper}>
        <Button type="btnIcon" icon="trashGrey" />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 35,
  },
  imageWrapper: {
    width: 87,
    height: 87,
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: 67,
    height: 67,
    resizeMode: 'contain',
  },
  product: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontFamily: fonts.primary.bold,
    color: colors.text.primary,
  },
  qtyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qty: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    marginHorizontal: 25,
  },
  iconWrapper: {
    justifyContent: 'flex-end',
  },
});
