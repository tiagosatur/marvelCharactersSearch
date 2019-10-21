import React from 'react';
import { FlatList, View, Image, Text} from 'react-native';
import styles from './style';

const CharacterList = ({ list }) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={list}
                renderItem={({ item }) => 
                <View style={styles.listItem}>
                    <Image
                        source={{uri:`${item.thumbnail.path}.${item.thumbnail.extension}`}}
                        style={styles.characterAvatar} 
                    />
                    <Text style={styles.characterName}>{ item.name }</Text>
                </View> }
            />
        </View>
        
    );
}

export default CharacterList;