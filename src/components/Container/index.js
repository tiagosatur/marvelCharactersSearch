import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View, 
    StatusBar, 
} from 'react-native';
import styles from './style'
import { colors } from '../../styles';

const Container = ({ children }) => {
    return(
        <View style={styles.container}>
            <StatusBar barStyle={colors.primary} />
           
            <View style={styles.fulSize}>
                <SafeAreaView>
                    <ScrollView>
                        { children }
                    </ScrollView>
                </SafeAreaView>
            </View>
            <View style={styles.borderBottom}></View>
        </View>
    );
}

export default Container;