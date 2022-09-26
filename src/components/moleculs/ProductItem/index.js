import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import dummy from '../../../assets/dummy';
import {IcMoreVertical, IcStarFilled} from '../../../assets/icons';
import {colors, fonts} from '../../../utils';

const ProductItem = ({type, title, price, image, rating, review, onPress}) => {
  const img = dummy[image] || dummy.dummyHeadphone;

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <View style={styles.imageWrapper(type)}>
        <Image source={img} style={styles.image(type)} />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.title(type)}>{title}</Text>
          <Text style={styles.price(type)}>{price}</Text>
        </View>
        {rating && review && (
          <View style={styles.bottomCard}>
            <IcStarFilled />
            <Text style={styles.rating(type)}>{rating}</Text>
            <Text style={styles.review(type)}>{review} Reviews</Text>
            <IcMoreVertical />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: type => ({
    paddingVertical: type === 'horizontal' ? 0 : 15,
    paddingHorizontal: type === 'horizontal' ? 0 : 10,
    flexDirection: type === 'horizontal' ? 'row' : 'column',
    alignItems: type === 'horizontal' ? 'center' : 'stretch',
    borderRadius: 15,
    backgroundColor: colors.background.primary,
  }),
  imageWrapper: type => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: type === 'horizontal' ? 0 : 10,
    width: type === 'horizontal' ? 75 : '100%',
    height: type === 'horizontal' ? 75 : 125,
    marginRight: type === 'horizontal' ? 15 : 0,
    backgroundColor:
      type === 'horizontal' ? colors.background.secondary : 'transparent',
  }),
  image: type => ({
    width: type === 'horizontal' ? 55 : 125,
    height: type === 'horizontal' ? 55 : 125,
    resizeMode: 'contain',
  }),
  content: {
    flex: 1,
  },
  title: type => ({
    fontSize: type === 'horizontal' ? 16 : 14,
    marginTop: type === 'horizontal' ? 0 : 20,
    width: type === 'horizontal' ? '100%' : 135,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    marginBottom: 3,
  }),
  price: type => ({
    fontSize: type === 'horizontal' ? 14 : 12,
    fontFamily: fonts.primary.bold,
    color: colors.text.primary,
  }),
  bottomCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  rating: type => ({
    fontSize: type === 'horizontal' ? 12 : 10,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    marginLeft: 3,
    marginRight: 10,
  }),
  review: type => ({
    fontSize: type === 'horizontal' ? 12 : 10,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    flex: 1,
  }),
});
