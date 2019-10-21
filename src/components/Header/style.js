
import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const commonHeadings = {
    color: colors.primary,
    fontSize: 16,
}

const styles = StyleSheet.create({
    searchBox: {
       flexDirection: 'row',
       justifyContent: 'space-between',
    },
    container: {
        padding: 16,
    },
    title: {
        ...commonHeadings,
        fontWeight: '700',
        paddingRight: 4,
    },
    subtitle: {
        ...commonHeadings,
    },
    titleRelative: {
        position: 'relative',
    },
    titleUnderline: {
        backgroundColor: colors.primary,
        bottom: -3,
        width: 50,
        height: 3,
        position: 'absolute',
        left: 0,
    },
    label: {
        color: colors.primary,
        fontSize: 14,
        marginBottom: 8,
    },
    heading: {
        flexDirection: 'row',
        fontSize: 16,
        paddingVertical: 12,
    },
    bottomHeader: {
        backgroundColor: colors.primary,
        color: colors.white,
        paddingHorizontal: 16,
        paddingVertical: 8,
        minHeight: 35,
       
    },
    bottomText: {
        color: colors.white,
    }
});

export default styles;