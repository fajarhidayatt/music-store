import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IcStarFilled, IcStarOutlined} from '../../../assets/icons';
import {colors, fonts} from '../../../utils';
import {Avatar} from '../../atoms';
import dummy from '../../../assets/dummy';

const ReviewItem = () => {
  return (
    <View style={styles.container}>
      <Avatar size={40} />
      <View style={styles.content}>
        <View>
          <View style={styles.top}>
            <Text style={styles.username}>Madelina</Text>
            <Text style={styles.time}>1 Month ago</Text>
          </View>
          <View style={styles.rating}>
            <IcStarFilled />
            <IcStarFilled />
            <IcStarFilled />
            <IcStarFilled />
            <IcStarOutlined />
          </View>
        </View>
        <View style={styles.reviewWrapper}>
          <Text style={styles.review}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image source={dummy.dummyHeadphone} style={styles.image} />
          <Image source={dummy.dummyHeadphone} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    marginLeft: 15,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
  time: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
  },
  rating: {
    flexDirection: 'row',
    marginTop: 3,
  },
  reviewWrapper: {
    marginTop: 10,
  },
  review: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    lineHeight: 20,
  },
  imageWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 15,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 10,
    borderColor: colors.border.primary,
    borderWidth: 1,
    marginRight: 15,
  },
});
