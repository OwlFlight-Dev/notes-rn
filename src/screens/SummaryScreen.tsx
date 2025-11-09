import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
import ScreenWrapper from '../components/ScreenWrapper';
import Section from '../components/Section';
import { COLORS } from '../constants/colors';
import { getCategoryCounts } from '../storage/noteStorage';


export default function SummaryScreen({ route }: any) {
    const [counts, setCounts] = useState({
        work_and_study: 0,
        life: 0,
        health_and_wellness: 0,
    });

    const loadCounts = async () => {
        const newCounts = await getCategoryCounts();
        setCounts(newCounts);
    };

    useFocusEffect(
        useCallback(() => {
            loadCounts();
        }, [])
    );

    const iconSize = 300;


    return (
        <ScreenWrapper>
            <View style={styles.header}>
                <Text style={styles.headerText}>Summary</Text>
                <Image source={require('../assets/robot-with-background.png')} style={[styles.headerImage, { height: iconSize, width: iconSize }]} />
            </View>

            <View style={styles.body}>
                <View style={styles.sectionContainer} >
                    <Section title='Work and study' iconSource={require('../assets/avatar-work-and-study.png')} iconSize={50}>
                        <ListItem
                            title={`This topic has a total of ${counts.work_and_study} records.`}
                            onPress={() => console.log('pressed!')}
                        />
                    </Section>

                    <Section title='Home life' iconSource={require('../assets/avatar-home-life.png')} iconSize={50}>
                        <ListItem
                            title={`This topic has a total of ${counts.life} records.`}
                            onPress={() => console.log('pressed!')}
                        />
                    </Section>

                    <Section title='Health and wellness' iconSource={require('../assets/avatar-health-and-wellness.png')} iconSize={50}>
                        <ListItem
                            title={`This topic has a total of ${counts.health_and_wellness} records.`}

                            onPress={() => console.log('pressed!')}
                        />
                    </Section>
                </View>
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingLeft: 20,
        flexDirection: "row",
        alignItems: "center",
        height: 200,
    },
    headerImage: {
        marginLeft: 'auto',
        paddingTop: 50,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    body: {
        backgroundColor: COLORS.white_5,
        flex: 1,
    },
    sectionContainer: {
        padding: 20,
    },
})