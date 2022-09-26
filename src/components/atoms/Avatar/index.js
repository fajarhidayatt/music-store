import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import dummy from '../../../assets/dummy';

const Avatar = ({size, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={dummy.dummyUser} style={styles.image(size)} />
    </TouchableOpacity>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  image: size => ({
    width: size,
    height: size,
    borderRadius: size,
    resizeMode: 'cover',
  }),
});
