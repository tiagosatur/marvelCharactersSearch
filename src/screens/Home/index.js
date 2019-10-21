import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,

} from 'react-native';
import { useAction } from '../../hooks';
import CharacterList from './CharacterList';
import { colors } from '../../styles';

const Home = () => {
  const {
    search: {
      isLoading,
      results
    }
} = useSelector(state => state);
const { searchTermAction } = useAction();


  useEffect(() => {  
    searchTermAction('spider')
  }, []);  

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
         
          <View style={styles.body}>
              { isLoading && <ActivityIndicator size="large" style={styles.loading} color={colors.primary} /> }

              {results && <CharacterList list={results} />}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.gray.g04,
  },
  body: {
    backgroundColor: colors.gray.g04,
  },
  loading: {
    marginTop: 20,
  }
});

export default Home;
