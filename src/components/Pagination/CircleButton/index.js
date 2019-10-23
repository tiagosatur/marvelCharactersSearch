import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from './style';
import { colors } from '../../../styles';

const CircleButton = ({ value, handlePress, active }) => {
    let isBtnActive = { backgroundColor: (active ? colors.primary : colors.white) }
    let isTextActive = { backgroundColor: (active ? colors.primary : colors.white) }
    
    return (
        <TouchableHighlight 
            underlayColor={colors.primary} 
            onPress={handlePress}
            style={[styles.circleButton, isBtnActive ]}
        >
            <Text style={ [  isTextActive] }>{ value}</Text>
        </TouchableHighlight>
    );
}

export default CircleButton;