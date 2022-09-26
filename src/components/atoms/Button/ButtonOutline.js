import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IcMenu, IcSliders} from '../../../assets/icons';
import {colors, fonts} from '../../../utils';

const icons = {
  filter: IcSliders,
};

const ButtonOutline = ({title, active, icon, onPress}) => {
  const Icon = icons[icon] || IcMenu;

  return (
    <TouchableOpacity style={styles.container(active)} onPress={onPress}>
      {icon && <Icon style={styles.icon} />}
      <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonOutline;

const styles = StyleSheet.create({
  container: active => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: colors.border.primary,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: active
      ? colors.background.tertiary
      : colors.background.primary,
  }),
  title: active => ({
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: active ? colors.text.secondary : colors.text.primary,
  }),
  icon: {
    marginRight: 8,
  },
});
