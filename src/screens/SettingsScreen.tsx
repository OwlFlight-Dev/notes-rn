import React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import ScreenWrapper from '../components/ScreenWrapper';


export default function SettingsScreen() {

  return (
    <ScreenWrapper>
      <Header title="Settings" showBackButton />
      <View style={styles.inner}>
        <ListItem
          imageSource={require('../assets/online-customer.png')}
          title="Online Customer"
          onPress={() => console.log('Online Customer')}
          chevron
        />

        <ListItem
          imageSource={require('../assets/user-agreement.png')}
          title="User Agreement"
          onPress={() => console.log('User Agreement')}
          chevron
        />

        <ListItem
          imageSource={require('../assets/privacy-policy.png')}
          title="Privacy Policy"
          onPress={() => console.log('Privacy Policy')}
          chevron
        />

        <ListItem
          imageSource={require('../assets/about-us.png')}
          title="About Us"
          onPress={() => console.log('About Us')}
          chevron
        />
        
      </View>
      <BottomTab buttonText="Delete All Notes" onButtonPress={() => console.log('button pressed')} />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    width: '100%',
    padding: 16,
    justifyContent: 'flex-start',
  },
});
