import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {IcEmail, IcLock, IcSearch} from '../../../assets/icons';
import {colors} from '../../../utils';

const icons = {
  email: IcEmail,
  password: IcLock,
  search: IcSearch,
};

const Input = ({placeholder, icon, onPressIn}) => {
  const [border, setBorder] = useState(colors.border.primary);
  const Icon = icons[icon];

  const handleFocus = () => {
    setBorder(colors.border.tertiary);
  };

  const handleBlur = () => {
    setBorder(colors.border.primary);
  };

  if (icon) {
    return (
      <View>
        <Icon style={styles.icon} />
        <TextInput
          style={styles.textInput(icon, border)}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onPressIn={onPressIn}
        />
      </View>
    );
  }

  return (
    <View>
      <TextInput
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.textInput(icon, border)}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: (icon, border) => ({
    backgroundColor: colors.background.primary,
    borderRadius: 10,
    borderColor: border,
    borderWidth: 1,
    padding: 15,
    paddingLeft: icon ? 45 : 15,
  }),
  icon: {
    position: 'absolute',
    zIndex: 1,
    top: 20,
    left: 15,
  },
});
