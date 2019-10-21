import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import CharacterList from './CharacterList';

const Home = () => {
  const {
    search: {
      isLoading,
      results
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
              { isLoading && <Text>Searching...</Text> }

              {results && <CharacterList list={results} />}
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
