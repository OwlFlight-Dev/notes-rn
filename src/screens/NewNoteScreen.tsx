import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomTab from '../components/BottomTab';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';
import NoteTextInput from '../components/NoteTextInput';
import ScreenWrapper from '../components/ScreenWrapper';


export default function NewNoteScreen() {
  const [category, setCategory] = useState<string | null>(null);
  const [note, setNote] = useState('');

  return (
    <ScreenWrapper>
      <Header title="New Note" showBackButton />
      <View style={styles.inner}>
        <Dropdown
          items={[
            { label: 'Work and Study', value: 'work_and_study' },
            { label: 'Life', value: 'life' },
            { label: 'Health and Well-being', value: 'health_and_wellbeing' },
          ]}
          placeholder="Choose a category"
          onChangeValue={setCategory}
        />

        <NoteTextInput
          value={note}
          onChangeText={setNote}
          placeholder="Please input note content"
        />
      </View>
      <BottomTab buttonText="Save Note" onButtonPress={() => console.log('button pressed')} />
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
