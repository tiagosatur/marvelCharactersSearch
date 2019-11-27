import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';
import {useAction} from '../../hooks';
import {colors} from '../../styles';
import {Container, Loader, Pagination} from '../../components';

const Hero = () => {
  const {
    search: {},
  } = useSelector(state => state);

  const {} = useAction();

  return (
    <Container>
      <View>
        <Text>Hero screen</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.gray.g04,
  },
  body: {
    flex: 1,
  },

  fullSize: {
    flex: 1,
  },
});

export default Hero;
