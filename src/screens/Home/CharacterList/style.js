import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

const avatarSize = 60;

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderBottomColor: colors.gray.g02,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    characterAvatar: {
        borderRadius: avatarSize/2,
        height: avatarSize,
        marginRight: 16,
        width: avatarSize,
        resizeMode: 'cover',
    },
    characterName: {
        color: colors.gray.g03,
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        flex: 1,
    },
});

export default styles;