import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IcClock, IcTimes} from '../../../assets/icons';
import {colors, fonts} from '../../../utils';

const SearchItem = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <IcClock />
      <Text style={styles.title}>{title}</Text>
      <IcTimes />
    </TouchableOpacity>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    flex: 1,
    marginLeft: 10,
  },
});
