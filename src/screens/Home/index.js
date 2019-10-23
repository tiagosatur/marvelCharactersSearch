import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
} from 'react-native';
import { useAction } from '../../hooks';
import CharacterList from './CharacterList';
import { colors } from '../../styles';
import { Container, Loader, Pagination } from '../../components';

const Home = () => {
  const {
    search: {
      isLoading,
      results,
      total,
      term,
    }
} = useSelector(state => state);


const { searchTermAction } = useAction();
  useEffect(() => {  
    searchTermAction({term: 'spider'})
  }, []);

  function handlePageRequest({ offset, itemsPerPage}) {
      searchTermAction({ term, offset, itemsPerPage })
  }

  return (
    <Container>          
        <View> 
          { isLoading ?  
              <Loader /> : 
            results && <CharacterList list={results} /> 
          }
           <Pagination
                total={total}
                handlePageRequest={handlePageRequest}
                itemsPerPage={4}
            />
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
  }
});

export default Home;
