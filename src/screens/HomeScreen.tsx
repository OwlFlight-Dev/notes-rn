import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
import ScreenWrapper from '../components/ScreenWrapper';
import Section from '../components/Section';
import { COLORS } from '../constants/colors';
import { NoteType, loadNotes } from '../storage/noteStorage';

type NotesByCategory = {
    [key in NoteType['category']]?: NoteType[];
};

const CATEGORY_ICONS: Record<NoteType['category'], any> = {
    work_and_study: require('../assets/work-and-study.png'),
    life: require('../assets/life.png'),
    health_and_wellness: require('../assets/health-and-wellness.png'),
};

const CATEGORY_TITLES: Record<NoteType['category'], string> = {
    work_and_study: 'Work and study',
    life: 'Life',
    health_and_wellness: 'Health and wellness',
};

export default function HomeScreen() {
    const iconSize = 24;
    const [notesByCategory, setNotesByCategory] = useState<NotesByCategory>({});

    const navigation = useNavigation();

    const loadNotesByCategory = async () => {
        const allNotes = await loadNotes();

        const grouped: NotesByCategory = allNotes.reduce((acc, note) => {
            if (!acc[note.category]) acc[note.category] = [];
            acc[note.category]!.push(note);
            return acc;
        }, {} as NotesByCategory);

        Object.keys(CATEGORY_ICONS).forEach((key) => {
            const category = key as NoteType['category'];
            if (!grouped[category] || grouped[category]!.length === 0) {
                grouped[category] = [
                    {
                        id: `placeholder-${category}-0`,
                        category,
                        content: 'Tap to add note',
                        createdAt: new Date().toISOString(),
                    },
                ];
            }
        });

        setNotesByCategory(grouped);
    };

    useFocusEffect(
        useCallback(() => {
            loadNotesByCategory();
        }, [])
    );

    const handlePressNote = (note: NoteType) => {
        if (note.id.startsWith('placeholder')) {
            navigation.navigate('NewNote', { category: note.category });
        } else {
            navigation.navigate('NoteDetails', { id: note.id });
        }
    };

    return (
        <ScreenWrapper>
            <ScrollView style={styles.mainView}>
                <View style={styles.recentView}>
                    <Ionicons name="time-outline" size={iconSize} color={COLORS.white_70} />
                    <Text style={styles.recentText}>Recently created notes</Text>
                </View>

                {Object.keys(CATEGORY_ICONS).map((category) => {
                    const allNotes = notesByCategory[category as NoteType['category']] || [];
                    if (allNotes.length === 0) return null;

                    const previewNotes = allNotes
                        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                        .slice(0, 3);

                    return (
                        <Section
                            key={category}
                            iconSource={CATEGORY_ICONS[category as NoteType['category']]}
                            title={CATEGORY_TITLES[category as NoteType['category']]}
                        >
                            {previewNotes.map((note) => (
                                <ListItem
                                    key={note.id}
                                    title={note.content.slice(0, 20)}
                                    onPress={() => handlePressNote(note)}
                                    chevron
                                />
                            ))}
                            {allNotes.length > 3 && (
                                <Pressable
                                    onPress={() =>
                                        navigation.navigate('CategoryNotes', {
                                            category: category as NoteType['category'],
                                        })
                                    }
                                >
                                    <Text style={{ color: COLORS.pink, marginTop: 8 }}>
                                        View All ({allNotes.length})
                                    </Text>
                                </Pressable>
                            )}
                        </Section>
                    );
                })}
            </ScrollView>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 20,
        marginBottom: 20
    },
    recentView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    recentText: {
        marginLeft: 8,
        fontSize: 16,
        color: COLORS.white_70,
    },
});
