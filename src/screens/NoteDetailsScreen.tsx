import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import BottomTab from '../components/BottomTab';
import ConfirmModal from '../components/ConfirmModal';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import ScreenWrapper from '../components/ScreenWrapper';
import { COLORS } from '../constants/colors';
import { useToast } from '../context/ToastContext';
import { deleteNote, getNoteById, NoteType } from '../storage/noteStorage';

export default function NoteDetailsScreen({ route }: any) {
    const { id } = route.params;
    const [note, setNote] = useState<NoteType | null>(null);
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();
    const { showToast } = useToast();

    useEffect(() => {
        const loadNote = async () => {
            try {
                const data = await getNoteById(id);
                setNote(data || null);
            } catch (err) {
                console.error('Error loading note:', err);
            } finally {
                setLoading(false);
            }
        };
        loadNote();
    }, [id]);

    if (loading) {
        return (
            <ScreenWrapper>
                <Header title="Note Details" showBackButton />
                <View style={styles.center}>
                    <ActivityIndicator size="large" />
                </View>
            </ScreenWrapper>
        );
    }

    if (!note) {
        return (
            <ScreenWrapper>
                <Header title="Note Details" showBackButton />
                <View style={styles.center}>
                    <Text style={styles.notFound}>Note not found.</Text>
                </View>
            </ScreenWrapper>
        );
    }

    const CATEGORY_ICONS: Record<NoteType['category'], any> = {
        work_and_study: require('../assets/work-and-study.png'),
        life: require('../assets/life.png'),
        health_and_wellness: require('../assets/health-and-wellness.png'),
    };

    const categoryIcon = CATEGORY_ICONS[note.category];

    const formattedDate = new Date(note.createdAt).toLocaleString(undefined, {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    const handleDeleteNote = async () => {
        setModalVisible(true);
    };

    const confirmDelete = async () => {
        setModalVisible(false);
        try {
            await deleteNote(id);
            navigation.goBack();
            showToast('Note deleted successfully');
        } catch (err) {
            console.error('Failed to delete note', err);
            showToast('Failed to delete note');
        }
    }

    return (
        <ScreenWrapper>
            <ConfirmModal
                visible={modalVisible}
                title="Confirm Delete"
                message="Are you sure you want to delete this note?"
                onCancel={() => setModalVisible(false)}
                onConfirm={confirmDelete}
            />

            <Header title="Note Details" showBackButton />
            <View style={styles.container} >
                <ListItem imageSource={categoryIcon} title={note.category.replace(/_/g, ' ').replace(/^./, c => c.toUpperCase())} />
                <ListItem title={note.content} height={100} />

                <View style={styles.dateContainer}>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>
            </View>
            <BottomTab buttonText="Delete Note" onButtonPress={handleDeleteNote} />
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notFound: {
        fontSize: 16,
        color: COLORS.gray
    },
    dateContainer: {
        alignSelf: 'flex-end',
    },
    date: {
        color: COLORS.gray,
    }
});
