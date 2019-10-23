
import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

const styles = StyleSheet.create({
    circleButton: {
        alignItems: 'center',
        borderRadius: 25,
        borderColor: colors.primary,
        borderWidth: 1,
        justifyContent: 'center',
        marginVertical: 2,
        marginHorizontal: 10,
        height: 40,
        width: 40,
    },
});

export default styles;