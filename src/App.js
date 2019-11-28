import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Home, Hero} from './screens';
import {Header} from './components';
import {colors} from './styles';

const App = () => {
  return (
    <SafeAreaView forceInset={{top: 'always'}} style={{flex: 1}}>
      <StatusBar backgroundColor={colors.primary} />
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="home" component={Home} initial navBar={Header} />
            <Scene key="hero" component={Hero} title='Meu herói' />
          </Stack>
        </Router>
      </Provider>
    </SafeAreaView>
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
