import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../../Themes'

export default StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: Colors.lightgrey,
        paddingHorizontal: Metrics.marginTiny,
        paddingVertical: Metrics.marginSmall
    },
    sectionRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',

    },
    labelText: {
        ...Fonts.style.captionSmall,
        fontWeight: '800'
    },
    valueText: {
        ...Fonts.style.smallLightItalic,
        color: Colors.facebook
    }
});
