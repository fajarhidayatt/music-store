import React, {Fragment, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Badge, Button, Gap, Input} from '../../atoms';

const FilterModal = ({handleClose}) => {
  const [category, setCategory] = useState('Headphone');
  const [sort, setSort] = useState('Popularity');

  const [categoryList] = useState([
    {
      id: 1,
      title: 'Headphone',
    },
    {
      id: 2,
      title: 'Headband',
    },
    {
      id: 3,
      title: 'Earphone',
    },
    {
      id: 4,
      title: 'Airpods',
    },
    {
      id: 5,
      title: 'Earpads',
    },
  ]);

  const [sortList] = useState([
    {
      id: 1,
      title: 'Popularity',
    },
    {
      id: 2,
      title: 'Newest',
    },
    {
      id: 3,
      title: 'Oldest',
    },
    {
      id: 4,
      title: 'High Price',
    },
    {
      id: 5,
      title: 'Low Price',
    },
    {
      id: 6,
      title: 'Review',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Filter</Text>
        <Button type="btnIcon" icon="times" onPress={handleClose} />
      </View>
      <View style={styles.filter}>
        <Text style={styles.subTitle}>Category</Text>
        <ScrollView
          style={styles.badgeWrapper}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <Gap width={24} />
          {categoryList.map(item => (
            <Fragment key={item.id}>
              <Badge
                title={item.title}
                active={category === item.title}
                onPress={() => setCategory(item.title)}
              />
              <Gap width={10} />
            </Fragment>
          ))}
        </ScrollView>
      </View>
      <View style={styles.filter}>
        <Text style={styles.subTitle}>Sort By</Text>
        <View style={styles.sortWrapper}>
          {sortList.map(item => (
            <View style={styles.buttonWrapper} key={item.id}>
              <Button
                title={item.title}
                type="btnOutline"
                active={sort === item.title}
                onPress={() => setSort(item.title)}
              />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.filter}>
        <Text style={styles.subTitle}>Price Range</Text>
        <View style={styles.inputWrapper}>
          <View style={styles.input}>
            <Input placeholder="Min Price" />
          </View>
          <Gap width={17} />
          <View style={styles.input}>
            <Input placeholder="Max Price" />
          </View>
        </View>
      </View>
      <View style={styles.filter}>
        <Button title="Apply Filter" />
      </View>
    </View>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  filter: {
    marginTop: 35,
  },
  badgeWrapper: {
    marginHorizontal: -24,
  },
  sortWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonWrapper: {
    marginRight: 12,
    marginBottom: 12,
  },
  inputWrapper: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
});
