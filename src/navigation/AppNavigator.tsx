import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import BottomNavBar from '../components/BottomNavBar';
import NewNoteScreen from '../screens/NewNoteScreen';
import SettingsScreen from '../screens/SettingsScreen';


type RootStackParamList = {
    Tabs: undefined;
    Home: undefined;
    NewNote: undefined;
    Summary: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();


export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Tabs" component={BottomNavBar} />

            <Stack.Screen name="NewNote" component={NewNoteScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>

    );
}