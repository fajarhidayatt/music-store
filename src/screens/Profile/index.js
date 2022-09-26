import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Header, ListItem} from '../../components/moleculs';
import {Avatar} from '../../components/atoms';

const Profile = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <Header
        title="Profile"
        onLeft="chevronLeft"
        handleLeft={() => navigation.goBack()}
      />
      <View style={styles.userProfile}>
        <Avatar size={75} />
        <View style={styles.username}>
          <Text style={styles.name}>Andrea Hirata</Text>
          <Text style={styles.email}>hirata@gmail.com</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>General</Text>
        <View>
          <ListItem title="Edit Profile" />
          <ListItem title="Notifications" />
          <ListItem title="Wishlist" />
        </View>
      </View>
      <View>
        <Text style={styles.title}>Legal</Text>
        <View>
          <ListItem title="Term of Use" />
          <ListItem title="Privacy Policy" />
        </View>
      </View>
      <View>
        <Text style={styles.title}>Personal</Text>
        <View>
          <ListItem title="Report a Bug" />
          <ListItem title="Logout" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background.primary,
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 35,
    paddingHorizontal: 24,
    borderBottomColor: colors.border.primary,
    borderBottomWidth: 1,
  },
  username: {
    marginLeft: 25,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
  email: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    marginTop: 7,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
});
