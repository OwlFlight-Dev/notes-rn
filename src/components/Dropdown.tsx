import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { COLORS } from '../constants/colors';

type DropdownItem = {
    label: string;
    value: string;
};

type DropdownProps = {
    items: DropdownItem[];
    placeholder?: string;
    onChangeValue?: (value: string | null) => void;
};

export default function Dropdown({
    items,
    placeholder = 'Choose a category',
    onChangeValue,
}: DropdownProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string | null>(null);
    const [options, setOptions] = useState(items);

    return (
        <View style={styles.container}>
            <DropDownPicker
                open={open}
                value={value}
                items={options}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setOptions}
                placeholder={placeholder}
                onChangeValue={onChangeValue}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropDownContainer}
                textStyle={styles.text}
                ArrowDownIconComponent={() => (
                    <Ionicons name="chevron-down" size={20} color={COLORS.white} />
                )}
                ArrowUpIconComponent={() => (
                    <Ionicons name="chevron-up" size={20} color={COLORS.white} />
                )}
                TickIconComponent={() => (
                    <Ionicons name="checkmark" size={20} color={COLORS.white} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1000,
    },
    dropdown: {
        borderRadius: 12,
        backgroundColor: COLORS.white_5,
        borderColor: COLORS.white_12,
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    dropDownContainer: {
        borderRadius: 12,
        backgroundColor: COLORS.white_5,
        borderColor: COLORS.white_12,
    },
    text: {
        color: COLORS.white_90,
    },
});
