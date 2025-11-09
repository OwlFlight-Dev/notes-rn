import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';
import IconButton from './IconButton';

type ListItemProps = {
  iconName?: keyof typeof Ionicons.glyphMap;
  imageSource?: any;
  title: string;
  onPress?: () => void;
  chevron?: boolean;
  height?: number;
};

export default function ListItem({ iconName, imageSource, title, onPress, chevron = false, height }: ListItemProps) {
  
  return (
    <TouchableOpacity style={[styles.container, { paddingBottom: height ?? 16 }]} onPress={onPress}>
      <View style={styles.left}>
        {(iconName || imageSource) && (
          <IconButton
            iconName={iconName}
            imageSource={imageSource}
            size={24}
            style={{ marginRight: 12 }}
          />
        )}
        <Text style={styles.text}>{title}</Text>
      </View>
      {chevron && <Ionicons name={'chevron-forward'} size={20} color={COLORS.pink} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white_5,
    borderColor: COLORS.white_12,
    borderWidth: 0.5,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  text: {
    color: COLORS.white_90,
    fontSize: 16,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
});
