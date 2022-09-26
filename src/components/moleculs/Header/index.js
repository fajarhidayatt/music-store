import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../../assets/icons';
import {colors, fonts} from '../../../utils';
import {Avatar, Button, Gap} from '../../atoms';

const Header = ({title, onLeft, onRight, handleLeft, handleRight}) => {
  return (
    <View style={styles.container}>
      {onLeft === 'avatar' ? (
        <Avatar size={35} onPress={handleLeft} />
      ) : (
        <Button type="btnIcon" icon={onLeft} onPress={handleLeft} />
      )}
      {title === 'logo' ? <Logo /> : <Text style={styles.title}>{title}</Text>}
      {onRight ? (
        <Button type="btnIcon" icon={onRight} onPress={handleRight} />
      ) : (
        <Gap width={24} />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.bold,
    color: colors.text.primary,
  },
});
