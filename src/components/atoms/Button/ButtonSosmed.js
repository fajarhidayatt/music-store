import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IcApple, IcFacebook, IcGoogle} from '../../../assets/icons';
import {colors} from '../../../utils';

const icons = {
  apple: IcApple,
  facebook: IcFacebook,
  google: IcGoogle,
};

const ButtonSosmed = ({icon}) => {
  const Icon = icons[icon];

  return (
    <TouchableOpacity style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
};

export default ButtonSosmed;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.background.primary,
  },
});
