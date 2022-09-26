import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Badge = ({title, active, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(active, type)} onPress={onPress}>
      <Text style={styles.title(active, type)}>{title}</Text>
      {type === 'line' && active && (
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: (active, type) => ({
    paddingVertical: 5,
    paddingHorizontal: type === 'line' ? 0 : 15,
    borderRadius: 30,
    backgroundColor:
      type === 'line' && active
        ? 'transparent'
        : active
        ? colors.background.tertiary
        : 'transparent',
  }),
  title: (active, type) => ({
    fontSize: type === 'line' ? 16 : 14,
    fontFamily: fonts.primary.reguler,
    color:
      type === 'line'
        ? colors.text.primary
        : active
        ? colors.text.secondary
        : colors.text.tertiary,
  }),
  lineContainer: {
    paddingTop: 13,
    alignItems: 'center',
  },
  line: {
    width: 24,
    height: 3,
    backgroundColor: colors.background.tertiary,
  },
});
