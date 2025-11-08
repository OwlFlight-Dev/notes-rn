import { Ionicons } from "@expo/vector-icons";
import { Image, StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { COLORS } from "../constants/colors";

type IconButtonProps = {
  iconName?: keyof typeof Ionicons.glyphMap;
  imageSource?: any;
  size?: number; 
  color?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>; 
};

export default function IconButton({
  iconName,
  imageSource,
  size = 24,
  color = COLORS.white,
  onPress,
  style,
}: IconButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {imageSource ? (
        <Image
          source={imageSource}
          style={{ width: size, height: size }}
        />
      ) : iconName ? (
        <Ionicons name={iconName} size={size} color={color} />
      ) : null}
    </TouchableOpacity>
  );
}
