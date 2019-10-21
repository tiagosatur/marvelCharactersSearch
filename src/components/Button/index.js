import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../styles';

const Button = ({
    text,
    handlePress,
    id,
}) => {
    return(
        <>
            <TouchableOpacity               
                onPress={handlePress}
                testID={id}
                style={styles.button}
            >
                <Text style={styles.label}>{ text }</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderBottomRightRadius: 3,
        borderTopRightRadius: 3,
        padding: 12,
    },
    label: {
        color: colors.white,
    }
});

export default Button;