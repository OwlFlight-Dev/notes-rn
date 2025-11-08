import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
import ScreenWrapper from '../components/ScreenWrapper';
import Section from '../components/Section';
import { COLORS } from '../constants/colors';


export default function SummaryScreen({ route }: any) {
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
                            title={"This topic has a total of 50 records."}
                            onPress={() => console.log('pressed!')}
                        />
                    </Section>

                    <Section title='Home life' iconSource={require('../assets/avatar-home-life.png')} iconSize={50}>
                        <ListItem
                            title={"This topic has a total of 12 records."}
                            onPress={() => console.log('pressed!')}
                        />
                    </Section>

                    <Section title='Health and wellness' iconSource={require('../assets/avatar-health-and-wellness.png')} iconSize={50}>
                        <ListItem
                            title={"This topic has a total of 30 records."}
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