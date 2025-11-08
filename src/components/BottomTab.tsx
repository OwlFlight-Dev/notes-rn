import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";

type BottomTabProps = {
    buttonText: string;
    onButtonPress: () => void;
};

export default function BottomTab({ buttonText, onButtonPress }: BottomTabProps) {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                <Text style={styles.buttonText}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: COLORS.darkPurple,
        paddingBottom: 120,
        justifyContent: 'center',
    },
    button: {
        position: "absolute",
        alignSelf: "center",
        backgroundColor: COLORS.pink,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 24,
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: "bold",
    },
});
