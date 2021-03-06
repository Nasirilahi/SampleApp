import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../../Themes'

export default StyleSheet.create({
    container: {
        paddingHorizontal: Metrics.marginTiny,
        paddingBottom: Metrics.marginSmall
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
        color: Colors.facebook,
        flex: 1
    },
    seperator: {
        height: 1,
        marginBottom: Metrics.marginSmall,
        backgroundColor:  Colors.lightgrey,
        width: Metrics.screenWidth - 2 * (Metrics.marginSmall + Metrics.marginTiny) ,
    }
});
