import React from 'react';
import { Provider } from 'react-redux'
import store from './store';
import { Router, Scene, Stack } from 'react-native-router-flux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Home } from './screens';
import { Header } from './components';


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Stack key="root">
                    <Scene key="home" component={Home} initial navBar={Header} />
                </Stack>
            </Router>
        </Provider>
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
