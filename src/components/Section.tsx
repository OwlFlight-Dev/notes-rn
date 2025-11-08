import React, { ReactNode } from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

type SectionProps = {
    iconSource?: ImageSourcePropType;
    title: string;
    children: ReactNode;
    iconSize?: number;
};

export default function Section({ iconSource, title, children, iconSize = 24 }: SectionProps) {
    return (
        <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
                {iconSource && <Image source={iconSource} style={{ width: iconSize, height: iconSize }} />}
                <Text style={styles.sectionTitle}>{title}</Text>
            </View>
            <View style={styles.sectionContent}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    sectionTitle: {
        marginLeft: 8,
        fontSize: 16,
        color: COLORS.white,
        fontWeight: 'bold',
    },
    sectionContent: {},
});
