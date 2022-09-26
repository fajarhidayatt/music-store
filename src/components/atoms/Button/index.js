import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IcChevronRight} from '../../../assets/icons';
import {colors, fonts} from '../../../utils';
import ButtonIcon from './ButtonIcon';
import ButtonOutline from './ButtonOutline';
import ButtonSosmed from './ButtonSosmed';

const Button = ({title, type, icon, active, onPress}) => {
  if (type === 'btnSosmed') {
    return <ButtonSosmed icon={icon} />;
  } else if (type === 'btnIcon') {
    return <ButtonIcon icon={icon} onPress={onPress} />;
  } else if (type === 'btnOutline') {
    return (
      <ButtonOutline
        title={title}
        active={active}
        icon={icon}
        onPress={onPress}
      />
    );
  }

  return (
    <TouchableOpacity style={styles.container(icon)} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      {icon === 'checkout' && <IcChevronRight />}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: icon => ({
    padding: 15,
    borderRadius: 10,
    flexDirection: icon === 'checkout' ? 'row' : 'column',
    alignItems: 'center',
    paddingHorizontal: icon === 'checkout' ? 30 : 15,
    justifyContent: icon === 'checkout' ? 'space-between' : 'flex-start',
    borderColor: 'transparent',
    borderWidth: 0,
    backgroundColor: colors.background.tertiary,
  }),
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.bold,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
