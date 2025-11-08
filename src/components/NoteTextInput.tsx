import React from 'react';
import { Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { COLORS } from '../constants/colors';

type NewNoteInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export default function NoteTextInput({
  value,
  onChangeText,
  placeholder = 'Please input note content',
}: NewNoteInputProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={COLORS.white_90}
          style={styles.input}
          multiline
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flex: 1,
    zIndex: 999,
  },
  input: {
    backgroundColor: COLORS.white_5,
    color: COLORS.white_90,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    minHeight: 260,
    textAlignVertical: 'top',
  },
});
