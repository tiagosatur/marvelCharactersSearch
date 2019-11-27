import React from 'react';
import {ScrollView, View, StatusBar} from 'react-native';
import styles from './style';

const Container = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.fulSize}>
        <ScrollView>{children}</ScrollView>
      </View>
      <View style={styles.borderBottom}></View>
    </View>
  );
};

export default Container;
