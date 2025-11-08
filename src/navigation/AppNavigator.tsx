import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

import NewNoteScreen from '../screens/NewNoteScreen';
import SummaryScreen from '../screens/SummaryScreen';


type RootStackParamList = {
    Home: undefined;
    NewNote: undefined;
    Summary: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();


export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="NewNote" component={NewNoteScreen} />
            <Stack.Screen name="Summary" component={SummaryScreen} />
        </Stack.Navigator>
    );
}