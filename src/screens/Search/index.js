import React, {Fragment} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap, Input} from '../../components/atoms';
import {Header, ListItem, ProductItem} from '../../components/moleculs';
import {productListJson} from '../../json';
import {colors, fonts} from '../../utils';

const Search = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <Header
        title="Search"
        onLeft="chevronLeft"
        onRight="shoppingCart"
        handleLeft={() => navigation.goBack('')}
        handleRight={() => navigation.navigate('Cart')}
      />
      <View style={styles.content}>
        <Input placeholder="Search headphone" icon="search" />
        <View>
          <Text style={styles.subTitle}>Lastest search</Text>
          <View>
            <ListItem title="Cable" type="search" />
            <ListItem title="Headphone" type="search" />
          </View>
        </View>
        <View>
          <Text style={styles.subTitle}>Popular product</Text>
          <View>
            {productListJson.popular.map(item => (
              <Fragment key={item.id}>
                <ProductItem
                  type="horizontal"
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                  review={item.review}
                  onPress={() => navigation.navigate('ProductDetail')}
                />
                <Gap height={25} />
              </Fragment>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background.primary,
  },
  content: {
    paddingVertical: 15,
    paddingHorizontal: 24,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    marginBottom: 20,
    marginTop: 30,
  },
});
