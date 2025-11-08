import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
import ScreenWrapper from '../components/ScreenWrapper';
import Section from '../components/Section';
import { COLORS } from '../constants/colors';

export default function HomeScreen() {
    const iconSize = 24;

    return (
        <ScreenWrapper>
            <View style={styles.mainView}>
                <View style={styles.recentView}>
                    <Ionicons name='time-outline' size={iconSize} color={COLORS.white_70} />
                    <Text style={styles.recentText}>Recently created notes</Text>
                </View>

                <Section iconSource={require('../assets/work-and-study.png')} title="Work and study">
                    <ListItem
                        title='Overview of basic computer networking knowledge'
                        onPress={() => console.log('pressed!')}
                        chevron
                    />
                    <ListItem
                        title='How to calculate float multiplication and division in JavaScript?'
                        onPress={() => console.log('pressed!')}
                        chevron
                    />
                </Section>

                <Section iconSource={require('../assets/life.png')} title="Life">
                    <ListItem
                        title='Pan-fried chicken breast with vegetable salad'
                        onPress={() => console.log('pressed!')}
                        chevron
                    />
                </Section>

                <Section iconSource={require('../assets/health-and-wellness.png')} title="Health and wellness">
                    <ListItem
                        title='Maintain sufficient daily water intake'
                        onPress={() => console.log('pressed!')}
                        chevron
                    />
                </Section>
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 20,
    },
    recentView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    recentText: {
        marginLeft: 8,
        fontSize: 16,
        color: COLORS.white_70,
    },
    sectionContainer: {
        marginTop: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitle: {
        marginLeft: 8,
        fontSize: 16,
        color: COLORS.white_90,
    },
    sectionContent: {
        marginTop: 12,
    },
});
