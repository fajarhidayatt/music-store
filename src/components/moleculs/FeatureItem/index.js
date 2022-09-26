import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import dummy from '../../../assets/dummy';
import {colors, fonts} from '../../../utils';

const FeatureItem = ({title, desc, image}) => {
  const img = dummy[image] || dummy.dummyFeatures1;

  return (
    <View style={styles.container}>
      <View>
        <Image source={img} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

export default FeatureItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 24,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  content: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.bold,
    color: colors.text.primary,
    lineHeight: 24,
    width: 150,
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    lineHeight: 22,
  },
});
