import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  IcChevronLeft,
  IcMenu,
  IcMinus,
  IcPlus,
  IcShopping,
  IcTimes,
  IcTrash,
  IcTrashGrey,
} from '../../../assets/icons';
import {colors} from '../../../utils';

const icons = {
  chevronLeft: IcChevronLeft,
  shoppingCart: IcShopping,
  trash: IcTrash,
  minus: IcMinus,
  plus: IcPlus,
  trashGrey: IcTrashGrey,
  times: IcTimes,
};

const ButtonIcon = ({icon, onPress}) => {
  const Icon = icons[icon] || IcMenu;
  const opt = icon === 'minus' || icon === 'plus';

  return (
    <TouchableOpacity style={styles.container(opt)} onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: opt => ({
    width: opt ? 30 : 24,
    height: opt ? 30 : 24,
    backgroundColor: opt ? colors.background.primary : 'transparent',
    borderColor: opt ? colors.border.primary : 'transparent',
    borderWidth: opt ? 1 : 0,
    borderRadius: opt ? 10 : 0,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
