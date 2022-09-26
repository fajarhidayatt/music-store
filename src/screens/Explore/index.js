import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Badge, Button, Gap} from '../../components/atoms';
import {FilterModal, Header, ProductItem} from '../../components/moleculs';
import {productListJson} from '../../json';
import {colors, fonts} from '../../utils';

const Explore = ({navigation}) => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['100%'], []);

  const handleShowFilter = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handlePress = () => {
    navigation.navigate('ProductDetail');
  };

  return (
    <ScrollView style={styles.page}>
      <Header
        onLeft="chevronLeft"
        onRight="shoppingCart"
        handleLeft={() => navigation.navigate('Home')}
        handleRight={() => navigation.navigate('Cart')}
      />
      <View style={styles.content}>
        <Text style={styles.subTitle}>Headphone</Text>
        <Text style={styles.title}>TMA Wireless</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollWrapper}
          contentContainerStyle={{alignItems: 'center'}}>
          <Gap width={24} />
          <Button
            title="Filter"
            type="btnOutline"
            icon="filter"
            onPress={() => handleShowFilter(0)}
          />
          <Gap width={10} />
          <Badge title="Popularity" />
          <Badge title="Newest" />
          <Badge title="Most Expensive" />
          <Badge title="Best Seller" />
        </ScrollView>
        <Gap height={35} />
        <View style={styles.productWrapper}>
          {productListJson.products.map(item => (
            <View style={styles.productItem} key={item.id}>
              <ProductItem
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                review={item.review}
                onPress={handlePress}
              />
            </View>
          ))}
        </View>
      </View>
      <BottomSheet ref={sheetRef} snapPoints={snapPoints} enablePanDownToClose>
        <BottomSheetView>
          <FilterModal handleClose={handleClosePress} />
        </BottomSheetView>
      </BottomSheet>
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background.primary,
  },
  content: {
    paddingTop: 15,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.secondary.normal,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    marginBottom: 10,
  },
  scrollWrapper: {
    marginTop: 20,
    marginHorizontal: -24,
  },
  productWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: colors.background.quaternary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16.5,
    marginHorizontal: -24,
  },
  productItem: {
    padding: 7.5,
    width: '50%',
  },
});
