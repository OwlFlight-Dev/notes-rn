import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import BottomTab from '../components/BottomTab';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';
import NoteTextInput from '../components/NoteTextInput';
import ScreenWrapper from '../components/ScreenWrapper';
import { useToast } from '../context/ToastContext';
import { addNote, getNextNoteId, NoteType } from '../storage/noteStorage';

type NewNoteRouteProp = RouteProp<{ params: { category?: NoteType['category'] } }, 'params'>;

export default function NewNoteScreen() {
  const route = useRoute<NewNoteRouteProp>();
  const [category, setCategory] = useState<string | null>(null);
  const [note, setNote] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { showToast } = useToast();

  useEffect(() => {
    if (route.params?.category) {
      setCategory(route.params.category);
    }
  }, [route.params]);

  const handleSaveNote = async () => {
    setDropdownOpen(false);

    if (!category || !note.trim()) {
      showToast('Select category and enter note');
      return;
    }

    try {
      const id = await getNextNoteId();
      const newNote = {
        id: id.toString(),
        category: category as 'work_and_study' | 'life' | 'health_and_wellness',
        content: note.trim(),
        createdAt: new Date().toISOString(),
      };

      await addNote(newNote);
      showToast('Note saved successfully');
      setNote('');
      setCategory(null);
    } catch (err) {
      console.error('Error saving note:', err);
      showToast('Failed to save note');
    }
  };

  return (
    <ScreenWrapper>
      <Header title="New Note" showBackButton />
      <View style={styles.inner}>
        {dropdownOpen && (
          <Pressable
            style={styles.screen}
            onPress={() => setDropdownOpen(false)}
          />
        )}
        <Dropdown
          items={[
            { label: 'Work and Study', value: 'work_and_study' },
            { label: 'Life', value: 'life' },
            { label: 'Health and wellness', value: 'health_and_wellness' },
          ]}
          placeholder="Choose a category"
          onChangeValue={setCategory}
          open={dropdownOpen}
          setOpen={setDropdownOpen}
          defaultValue={category}
        />

        <NoteTextInput
          value={note}
          onChangeText={setNote}
          placeholder="Please input note content"
        />

      </View>
      <BottomTab buttonText="Save Note" onButtonPress={handleSaveNote} />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999
  },
  inner: {
    flex: 1,
    width: '100%',
    padding: 16,
    justifyContent: 'flex-start',
  },
});
