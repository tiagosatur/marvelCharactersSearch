import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '../../styles';

const Input = ({
    placeholder,
    onChangeText,
    name,
    id,
}) => {
    return(
        <>
            <TextInput
                name={name}
                onChangeText={onChangeText}
                placeholder={placeholder}
                testID={id}
                style={styles.input}
            />
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.white,
        borderColor: colors.gray.g02,
        borderWidth: 1,
        borderStyle: 'solid',
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3,
        color: colors.gray.g03,
        flex: 1,
        padding: 8,
    },
});

export default Input;