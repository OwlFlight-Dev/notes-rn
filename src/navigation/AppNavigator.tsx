import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomNavBar from '../components/BottomNavBar';
import CategoryNotesScreen from '../components/CategoryNotesScreen';
import NewNoteScreen from '../screens/NewNoteScreen';
import NoteDetailsScreen from '../screens/NoteDetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type RootStackParamList = {
  Tabs: undefined;
  NewNote: { category?: string };
  Settings: undefined;
  CategoryNotes: undefined;
  NoteDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomNavBar} />
      <Stack.Screen name="NewNote" component={NewNoteScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="CategoryNotes" component={CategoryNotesScreen} />
      <Stack.Screen name="NoteDetails" component={NoteDetailsScreen} />
    </Stack.Navigator>
  );
}
