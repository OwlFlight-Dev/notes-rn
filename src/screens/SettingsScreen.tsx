import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomTab from '../components/BottomTab';
import ConfirmModal from '../components/ConfirmModal';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import Popout from '../components/Popout';
import ScreenWrapper from '../components/ScreenWrapper';
import { deleteAllNotes } from '../storage/noteStorage';


export default function SettingsScreen() {
  const [popoutMessage, setPopoutMessage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const showPopout = (message: string) => {
    setPopoutMessage(message);
    setTimeout(() => setPopoutMessage(null), 2000);
  };

  const handleDeleteNotes = async () => {
    setModalVisible(true);
  };

  const confirmDelete = async () => {
    setModalVisible(false);
    try {
      await deleteAllNotes();
      showPopout('All notes have been cleared');
    } catch (err) {
      console.error('Failed to delete notes', err);
      showPopout('Failed to delete notes');
    }
  }

  return (
    <ScreenWrapper>
      <Header title="Settings" showBackButton />

      {popoutMessage && <Popout visible={true} message={popoutMessage} />}

      <ConfirmModal
        visible={modalVisible}
        title="Confirm Delete"
        message="Are you sure you want to delete all notes?"
        onCancel={() => setModalVisible(false)}
        onConfirm={confirmDelete}
      />

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
      <BottomTab buttonText="Delete All Notes" onButtonPress={handleDeleteNotes} />
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
