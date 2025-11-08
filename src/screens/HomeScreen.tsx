import React from 'react';
import { View, Text, Button } from 'react-native';


export default function HomeScreen({ navigation }: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <Button title="Go" onPress={() => navigation.navigate('Details', { id: '42' })} />
        </View>
    );
}