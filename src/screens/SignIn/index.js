import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {bgGetStarted} from '../../assets/images';
import {Button, Gap, Input, Link} from '../../components/atoms';
import {colors, fonts} from '../../utils';

const windowHeight = Dimensions.get('window').height;

const SignIn = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={bgGetStarted} style={styles.page}>
        <View>
          <Text style={styles.title}>Audio</Text>
          <Text style={styles.desc}>It's modular and designed to last</Text>
        </View>
        <Gap height={200} />
        <View>
          <Input placeholder="Email" icon="email" />
          <Gap height={20} />
          <Input placeholder="Password" icon="password" />
          <Gap height={20} />
          <Link title="Forgot Password" color="white" />
        </View>
        <Gap height={32} />
        <View>
          <Button title="Sign In" onPress={() => navigation.navigate('Home')} />
          <View style={styles.linkWrapper}>
            <Text style={styles.textLink}>Didn’t have any account?</Text>
            <Link
              title="Sign Up here"
              color="green"
              decoration="underline"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default SignIn;

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
  },
});
