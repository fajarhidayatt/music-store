import React, {Fragment, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import dummy from '../../assets/dummy';
import {Badge, Button, Gap, Link} from '../../components/atoms';
import {
  FeatureItem,
  Header,
  ProductItem,
  ReviewItem,
} from '../../components/moleculs';
import {productListJson} from '../../json';
import {colors, fonts} from '../../utils';

const ProductDetail = ({navigation}) => {
  const [tab, setTab] = useState('overview');
  const [overview] = useState([
    {
      id: 1,
      image: 'dummyOverview1',
    },
    {
      id: 2,
      image: 'dummyOverview2',
    },
    {
      id: 3,
      image: 'dummyOverview3',
    },
    {
      id: 4,
      image: 'dummyOverview4',
    },
  ]);

  return (
    <ScrollView style={styles.page}>
      <Header
        onLeft="chevronLeft"
        onRight="shoppingCart"
        handleLeft={() => navigation.goBack()}
        handleRight={() => navigation.navigate('Cart')}
      />

      <View style={styles.productDetail}>
        <Text style={styles.price}>Rp. 155.000</Text>
        <Text style={styles.productName}>Rexus Vonix F30</Text>
        <View style={styles.tabWrapper}>
          <Badge
            title="Overview"
            type="line"
            active={tab === 'overview'}
            onPress={() => setTab('overview')}
          />
          <Gap width={35} />
          <Badge
            title="Features"
            type="line"
            active={tab === 'features'}
            onPress={() => setTab('features')}
          />
          <Gap width={35} />
          <Badge title="Specification" type="line" />
        </View>
      </View>

      <View>
        <View style={styles.overview(tab)}>
          <ScrollView
            style={styles.imgOverviewWrapper}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <Gap width={24} />
            {overview.map(item => (
              <Fragment key={item.id}>
                <Image source={dummy[item.image]} style={styles.imgOverview} />
                <Gap width={20} />
              </Fragment>
            ))}
          </ScrollView>
          <View>
            <Text style={styles.sectionTitle}>Review (120)</Text>
            <View style={styles.reviewWrapper}>
              <ReviewItem />
              <ReviewItem />
            </View>
            <Link title="See All Reviews" color="grey" weight="reguler" />
          </View>
          <View style={styles.productSection}>
            <View style={styles.topSection}>
              <Text style={styles.sectionTitle}>Another Product</Text>
              <Link
                title="See All"
                align="left"
                color="grey"
                weight="reguler"
              />
            </View>
            <ScrollView
              style={styles.productWrapper}
              horizontal
              showsHorizontalScrollIndicator={false}>
              <Gap width={24} />
              {productListJson.another.map(item => (
                <Fragment key={item.id}>
                  <ProductItem
                    title={item.title}
                    price={item.price}
                    image={item.image}
                  />
                  <Gap width={15} />
                </Fragment>
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={styles.features(tab)}>
          <Text style={styles.titleFeatureDesc}>Highly Detailed Audio</Text>
          <Text style={styles.featureDesc}>
            The speaker unit contains a diaphragm that is precision-grown from
            NAC Audio bio-cellulose, making it stiffer, lighter and stronger
            than regular PET speaker units, and allowing the sound-producing
            diaphragm to vibrate without the levels of distortion found in other
            speakers.{' '}
          </Text>
          <Text style={styles.featureDesc}>
            The speaker unit contains a diaphragm that is precision-grown from
            NAC Audio bio-cellulose, making it stiffer, lighter and stronger
            than regular PET speaker units, and allowing the sound-producing
            diaphragm to vibrate without the levels of distortion found in other
            speakers.
          </Text>
          <View>
            <FeatureItem
              title="APTX HD WIRELESS AUDIO"
              desc="The Aptx® HD codec transmits 24-bit hi-res audio, equal to or better than CD quality."
              image="dummyFeatures1"
            />
            <FeatureItem
              title="ULTRA SOFT WITH ALCANTARA"
              desc="Alcantara® is a highly innovative material offering an unrivalled combination of"
              image="dummyFeatures2"
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Add To Cart" />
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background.primary,
  },
  productDetail: {
    paddingTop: 18,
    paddingHorizontal: 24,
  },
  price: {
    fontSize: 16,
    fontFamily: fonts.primary.bold,
    color: colors.text.quaternary,
    marginBottom: 6,
  },
  productName: {
    fontSize: 28,
    fontFamily: fonts.secondary.normal,
    fontWeight: 'bold',
    lineHeight: 36,
    color: colors.text.primary,
    width: 150,
  },
  tabWrapper: {
    flexDirection: 'row',
    marginVertical: 30,
  },

  overview: tab => ({
    paddingHorizontal: 24,
    display: tab === 'overview' ? 'flex' : 'none',
  }),
  imgOverviewWrapper: {
    marginBottom: 40,
    marginHorizontal: -24,
  },
  imgOverview: {
    width: 285,
    height: 390,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
  reviewWrapper: {
    marginTop: 30,
  },
  productSection: {
    marginTop: 35,
    marginHorizontal: -24,
    paddingTop: 28,
    paddingBottom: 38,
    backgroundColor: colors.background.secondary,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 20,
  },

  features: tab => ({
    paddingHorizontal: 24,
    display: tab === 'features' ? 'flex' : 'none',
  }),
  titleFeatureDesc: {
    fontSize: 16,
    fontFamily: fonts.primary.bold,
    color: colors.text.primary,
  },
  featureDesc: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    marginTop: 13,
    lineHeight: 22,
  },

  buttonContainer: {
    paddingVertical: 30,
    paddingHorizontal: 24,
  },
});
