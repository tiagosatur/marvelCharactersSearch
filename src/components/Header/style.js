
import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const commonHeadings = {
    color: colors.primary,
    fontSize: 16,
}

const styles = StyleSheet.create({
    container: {
        
        padding: 16,
    },
    searchBox: {
       flexDirection: 'row',
       justifyContent: 'space-between',
    },
    title: {
        ...commonHeadings,
        fontFamily: 'Roboto-Black',
        fontWeight: '700',
        paddingRight: 4,
    },
    subtitle: {
        ...commonHeadings,
        fontFamily: 'Roboto-Light',
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
        fontFamily: 'Roboto-Light',
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
        elevation: 4,
       
    },
    bottomText: {
        color: colors.white,
        fontFamily: 'Roboto-Light',
        fontSize: 14,
    }
});

export default styles;