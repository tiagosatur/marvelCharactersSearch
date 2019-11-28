import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useAction} from '../../hooks';
import {colors} from '../../styles';
import {Container, Loader, Pagination} from '../../components';

const Hero = ({ id }) => {
  const {
    hero: {
      info,
      isLoading,
    },
  } = useSelector(state => state);

  const { getHeroAction } = useAction();

  useEffect(() => {
    getHeroAction({ id })
  }, [id])

  return (
    <Container>
        { isLoading ?  
            <Loader />
          : (
            <View style={styles.content}>
              <Text style={styles.heroName}>{ info && info.name } </Text>
              <Image
                source={{
                  uri: `${info.thumbnail && info.thumbnail.path}.${info.thumbnail && info.thumbnail.extension}`,
                }}
                style={styles.heroAvatar}
              />

              <Text style={styles.heroDescription}>{ info && info.description } </Text>
              
              {info.series && info.series.items.length > 0 && <Text style={styles.subtitle}>Séries </Text>}

              <FlatList 
                  data={info && info.series && info.series.items }
                  style={styles.list}
                  renderItem={({ item, i }) => 
                    <View key={i} style={styles.listItem}>
                      <Icon
                        name='chevron-right'
                        color={colors.primary}
                        size={15}
                        style={styles.listIcon}
                      />
                    
                      <Text style={styles.listText}>
                          { item.name }
                      </Text>
                    </View>
                  }
              />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Compre agora!</Text>
              </TouchableOpacity>
            </View>
          )
        }
        
    </Container>
  );
};
const avatarSize = 300;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.gray.g04,
  },
  body: {
    flex: 1,
  },
  content: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  heroName: {
    fontSize: 32,
    fontFamily: 'Roboto-Medium',
    marginBottom: 16,
    textAlign: 'center',
  },
  heroDescription: {
    fontSize: 14,
    fontFamily: 'Roboto-Light',
    marginBottom: 16,
  },
  heroAvatar: {
    borderRadius: 3,
    height: avatarSize,
    marginRight: 16,
    marginBottom: 32,
    width: avatarSize,
  },
  fullSize: {
    flex: 1,
  },
  list: {
    marginBottom : 42,
  },
  listItem: {
    marginBottom: 6,
    flexDirection: 'row',
  },
  listText: {

  },
  listIcon: {
    marginRight: 8,
  },
  subtitle: {
    alignSelf: 'flex-start',
    fontSize: 24,
    marginBottom: 16,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  }

});

export default Hero;
