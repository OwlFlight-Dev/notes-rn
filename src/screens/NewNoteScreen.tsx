import React from 'react';
import { View, Text } from 'react-native';


export default function NewNoteScreen({ route }: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details</Text>
            <Text>{JSON.stringify(route.params)}</Text>
        </View>
    );
}