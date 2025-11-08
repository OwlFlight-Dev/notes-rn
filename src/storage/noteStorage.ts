import AsyncStorage from '@react-native-async-storage/async-storage';

export type NoteType = {
  id: string;
  category: 'work_and_study' | 'life' | 'health_and_wellbeing';
  content: string;
  createdAt: string;
};

const NOTES_KEY = 'notes';
const NOTE_ID_KEY = 'note_id_counter';

export const loadNotes = async (): Promise<NoteType[]> => {
  try {
    const data = await AsyncStorage.getItem(NOTES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Error loading notes:', err);
    return [];
  }
};

export const saveNotes = async (notes: NoteType[]) => {
  try {
    await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch (err) {
    console.error('Error saving notes:', err);
  }
};

export const addNote = async (note: NoteType) => {
  const existing = await loadNotes();
  const updated = [note, ...existing];
  await saveNotes(updated);
};

export const deleteAllNotes = async () => {
  await AsyncStorage.removeItem(NOTES_KEY);
};

export const getNextNoteId = async (): Promise<number> => {
  const current = await AsyncStorage.getItem(NOTE_ID_KEY);
  const nextId = current ? parseInt(current, 10) + 1 : 1;
  await AsyncStorage.setItem(NOTE_ID_KEY, nextId.toString());
  return nextId;
};

export const getCategoryCounts = async (): Promise<Record<NoteType['category'], number>> => {
  const notes = await loadNotes();

  const counts: Record<NoteType['category'], number> = {
    work_and_study: 0,
    life: 0,
    health_and_wellbeing: 0,
  };

  for (const note of notes) {
    counts[note.category]++;
  }

  return counts;
};

