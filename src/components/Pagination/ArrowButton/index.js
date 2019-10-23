import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';
import { colors } from '../../../styles';

const ArrowButton = ({ name, handlePress, isDisabled }) => {
    return (
        <TouchableHighlight 
            underlayColor={colors.underlay} 
            onPress={handlePress}
            style={styles.arrowButton}
            disabled={isDisabled}
        >
            <Icon
                name={name}
                color={colors.primary}
                size={50}
            />
        </TouchableHighlight>
    );
}

export default ArrowButton;