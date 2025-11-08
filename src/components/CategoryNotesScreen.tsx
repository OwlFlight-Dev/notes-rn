import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import ScreenWrapper from '../components/ScreenWrapper';
import { COLORS } from '../constants/colors';
import { NoteType, loadNotes } from '../storage/noteStorage';

const CATEGORY_ICONS: Record<NoteType['category'], any> = {
  work_and_study: require('../assets/work-and-study.png'),
  life: require('../assets/life.png'),
  health_and_wellbeing: require('../assets/health-and-wellness.png'),
};

const CATEGORY_TITLES: Record<NoteType['category'], string> = {
  work_and_study: 'Work and study',
  life: 'Life',
  health_and_wellbeing: 'Health and wellbeing',
};

type RouteParams = {
  category: NoteType['category'];
};

export default function CategoryNotesScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params as RouteParams;

  const [notes, setNotes] = useState<NoteType[]>([]);

  const loadCategoryNotes = async () => {
    const allNotes = await loadNotes();
    const filtered = allNotes
      .filter((n) => n.category === category)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    setNotes(filtered);
  };

  useFocusEffect(
    useCallback(() => {
      loadCategoryNotes();
    }, [])
  );

  const handlePressNote = (note: NoteType) => {
    if (note.id.startsWith('placeholder')) {
      navigation.navigate('NewNote', { category: note.category });
    } else {
      console.log('pressed note', note.id);
    }
  };

  return (
    <ScreenWrapper>
      <Header
        title={CATEGORY_TITLES[category]}
        showBackButton
      />
      <ScrollView style={styles.container}>
        {notes.length === 0 ? (
          <Text style={styles.emptyText}>No notes yet for this category.</Text>
        ) : (
          notes.map((note) => (
            <ListItem
              key={note.id}
              title={note.content}
              onPress={() => handlePressNote(note)}
              chevron
            />
          ))
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  emptyText: {
    color: COLORS.white_70,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
});
