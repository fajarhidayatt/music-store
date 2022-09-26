import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IcArrowRightGreen} from '../../../assets/icons';
import {colors, fonts} from '../../../utils';
import Gap from '../Gap';

const textColors = {
  white: colors.text.secondary,
  green: colors.text.quaternary,
  grey: colors.text.tertiary,
};

const Link = ({
  title,
  color,
  decoration = 'none',
  align = 'center',
  arrow,
  weight = 'bold',
  onPress,
}) => {
  if (arrow) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title(color, decoration, align, weight)}>
          {title}
        </Text>
        <Gap width={10} />
        <IcArrowRightGreen />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title(color, decoration, align, weight)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    algnItems: 'center',
  },
  title: (color, decoration, align, weight) => ({
    fontSize: 14,
    fontFamily: fonts.primary[weight],
    color: textColors[color],
    textDecorationLine: decoration,
    textAlign: align,
  }),
});
