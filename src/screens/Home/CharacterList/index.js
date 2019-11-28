import React from 'react';
import {FlatList, View, Image, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './style';

const CharacterList = ({ list }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item, i) => `list-item${i}`}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => Actions.hero({ id: item.id })}>
            <View style={styles.listItem}>
              <Image
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                }}
                style={styles.characterAvatar}
              />
              <Text style={styles.characterName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CharacterList;
