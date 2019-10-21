import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import mountURL from '../../services/api/url';

const Home = () => {
  const {
    search: {
      isLoading
    }
} = useSelector(state => state);

  useEffect(() => {  

  }, []);  

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
         
          <View style={styles.body}>
            {
              isLoading && <Text>Searching...</Text>
            }
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f5f5f5',
  },
  body: {
    backgroundColor: '#f5f5f5',
  },
});

export default Home;
