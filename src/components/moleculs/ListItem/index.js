import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import SearchItem from './SearchItem';

const ListItem = ({type, title, onPress}) => {
  if (type === 'search') {
    return <SearchItem title={title} onPress={onPress} />;
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderBottomColor: colors.border.primary,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
});
