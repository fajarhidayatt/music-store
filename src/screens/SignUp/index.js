import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {bgGetStarted} from '../../assets/images';
import {Button, Gap, Input, Link} from '../../components/atoms';
import {colors, fonts} from '../../utils';

const windowHeight = Dimensions.get('window').height;

const SignUp = ({navigation}) => {
  return (
    <ScrollView>
      <ImageBackground source={bgGetStarted} style={styles.page}>
        <View>
          <Text style={styles.title}>Audio</Text>
          <Text style={styles.desc}>It's modular and designed to last</Text>
        </View>
        <Gap height={150} />
        <View>
          <Input placeholder="Email" icon="email" />
          <Gap height={20} />
          <Input placeholder="Password" icon="password" />
          <Gap height={20} />
          <Button title="Sign Up" onPress={() => navigation.navigate('Home')} />
        </View>
        <Gap height={42} />
        <View style={styles.iconWrapper}>
          <Button type="btnSosmed" icon="apple" />
          <Gap width={15} />
          <Button type="btnSosmed" icon="facebook" />
          <Gap width={15} />
          <Button type="btnSosmed" icon="google" />
        </View>
        <View style={styles.linkWrapper}>
          <Text style={styles.textLink}>If you have an account?</Text>
          <Link
            title="Sign In here"
            color="green"
            decoration="underline"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    paddingTop: 105,
    paddingHorizontal: 24,
    height: windowHeight,
  },
  title: {
    fontSize: 50,
    fontFamily: fonts.primary.bold,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.bold,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 5,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  textLink: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.secondary,
    marginRight: 5,
    textDecorationLine: 'underline',
  },
});
