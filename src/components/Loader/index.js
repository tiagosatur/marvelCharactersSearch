import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './style'
import { colors } from '../../styles';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" style={styles.loader} color={colors.primary} />
        </View>
    )
}

export default Loader;

