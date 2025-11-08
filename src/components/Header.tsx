import { useNavigation } from "@react-navigation/native";
import { JSX } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import IconButton from "./IconButton";

type HeaderProps = {
    title: string;
    rightComponent?: JSX.Element;
    showBackButton?: boolean;
    hideBackground?: boolean;
};

export default function Header({ title, rightComponent, showBackButton, hideBackground = false }: HeaderProps) {

    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.mainView}>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.headerRow}>
                    {showBackButton && (
                        <IconButton iconName='chevron-back' size={28} style={styles.backButton} onPress={handleBackPress}/>
                    )}

                    <Text style={[styles.title, !showBackButton && { marginLeft: 20 }]}>
                        {title}
                    </Text>

                    <View style={styles.rightComponent}>{rightComponent}</View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: COLORS.darkPurple,
    },
    linearGradientPadding: {
        paddingLeft: 20,
        paddingTop: 20
    },
    safeAreaView: {
        paddingBottom: -12,
        paddingTop: 24,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    backButton: {
        marginRight: 12,
        marginLeft: 20,
    },
    title: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: "bold",
    },
    rightComponent: {
        marginLeft: "auto",
        marginRight: 24
    },
});