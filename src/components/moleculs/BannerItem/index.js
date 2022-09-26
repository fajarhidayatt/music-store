import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import dummy from '../../../assets/dummy';
import {colors, fonts} from '../../../utils';
import {Link} from '../../atoms';

const BannerItem = ({title, image}) => {
  const img = dummy[image] || dummy.dummyHeadphone;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Link title="Shop Now" color="green" align="left" arrow />
      </View>
      <View>
        <Image source={img} style={styles.image} />
      </View>
    </View>
  );
};

export default BannerItem;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 178,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: colors.background.primary,
    borderRadius: 10,
  },
  image: {
    width: 115,
    height: 135,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.secondary.normal,
    fontWeight: 'bold',
    color: colors.text.primary,
    width: 150,
    lineHeight: 30,
    marginBottom: 15,
  },
});
