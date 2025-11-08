import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

type ScreenWrapperProps = {
  children: ReactNode;
};

export default function ScreenWrapper({ children }: ScreenWrapperProps) {
  return (
    <LinearGradient
      colors={COLORS.screenGradient}
      start={{ x: 1, y: 0 }}
      end={{ x: 2, y: 1 }}
      style={styles.linearGradient}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
