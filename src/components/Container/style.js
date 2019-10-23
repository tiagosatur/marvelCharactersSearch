
import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray.g04,
        flex: 1,
    },
    fulSize: {
        flex: 1,
    },
    borderBottom: {
        borderBottomWidth: 10,
        borderColor: colors.primary,
    },
});

export default styles;