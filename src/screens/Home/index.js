import React, {Fragment, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Badge, Gap, Input, Link} from '../../components/atoms';
import {BannerItem, Header, ProductItem} from '../../components/moleculs';
import {bannerListJson, productListJson} from '../../json';
import {colors, fonts} from '../../utils';

const Home = ({navigation}) => {
  const [badge, setBadge] = useState('Headphone');
  const [badgeList] = useState([
    {
      id: 1,
      title: 'Headphone',
    },
    {
      id: 2,
      title: 'Headset',
    },
    {
      id: 3,
      title: 'Earphone',
    },
    {
      id: 4,
      title: 'Speaker',
    },
    {
      id: 5,
      title: 'TWS',
    },
  ]);

  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Header
        title="logo"
        onLeft="avatar"
        onRight="shoppingCart"
        handleLeft={() => navigation.navigate('Profile')}
        handleRight={() => navigation.navigate('Cart')}
      />
      <View style={styles.topSection}>
        <Text style={styles.name}>Hi, Shinta</Text>
        <Text style={styles.textWelcome}>What are you looking for today?</Text>
        <Input
          placeholder="Search headphone"
          icon="search"
          onPressIn={() => navigation.navigate('Search')}
        />
      </View>
      <View style={styles.content}>
        <ScrollView
          style={styles.container}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <Gap width={24} />
          {badgeList.map(item => (
            <Fragment key={item.id}>
              <Badge
                title={item.title}
                active={badge === item.title}
                onPress={() => setBadge(item.title)}
              />
              <Gap width={10} />
            </Fragment>
          ))}
        </ScrollView>
        <Gap height={20} />
        <ScrollView
          style={styles.container}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <Gap width={24} />
          {bannerListJson.data.map(item => (
            <Fragment key={item.id}>
              <BannerItem title={item.title} image={item.image} />
              <Gap width={15} />
            </Fragment>
          ))}
        </ScrollView>
        <Gap height={20} />
        <View style={styles.wrapper}>
          <Text style={styles.subTitle}>Featured Products</Text>
          <Link
            title="See All"
            align="left"
            color="grey"
            weight="reguler"
            onPress={() => navigation.navigate('Explore')}
          />
        </View>
        <Gap height={20} />
        <ScrollView
          style={styles.container}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <Gap width={24} />
          {productListJson.featured.map(item => (
            <Fragment key={item.id}>
              <ProductItem
                title={item.title}
                price={item.price}
                image={item.image}
                onPress={() => navigation.navigate('ProductDetail')}
              />
              <Gap width={15} />
            </Fragment>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background.primary,
  },
  topSection: {
    paddingTop: 30,
    paddingHorizontal: 24,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
  textWelcome: {
    fontSize: 24,
    fontFamily: fonts.primary.bold,
    color: colors.text.primary,
    marginTop: 5,
    marginBottom: 25,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
  content: {
    backgroundColor: colors.background.secondary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 36,
    paddingHorizontal: 24,
    marginTop: 30,
  },
  container: {
    marginHorizontal: -24,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
