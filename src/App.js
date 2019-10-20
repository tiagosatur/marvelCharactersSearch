import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import mountURL from './services/api/url';

const App = () => {

  function makeFetch() {
      fetch(mountURL(), {
          method: 'get',
          headers: new Headers({
              'Accept': 'application/json',
              'Content-Type': 'application/json; charset=utf-8'
          }),
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      });
  }

  useEffect(() => {
    makeFetch();

  }, []);  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
         
          <View style={styles.body}>
            <Text>Marvel</Text>
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

export default App;
