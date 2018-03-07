import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../../Themes'

export default StyleSheet.create({
    container: {
        paddingHorizontal: Metrics.marginTiny,
        paddingBottom: Metrics.marginSmall
    },
    textStyle: {
        ...Fonts.style.body,
        fontWeight: 'normal',
        color: Colors.darkgrey,
        marginBottom: Metrics.baseMargin
    },
    seperator: {
        height: 1,
        marginBottom: Metrics.marginSmall,
        backgroundColor:  Colors.lightgrey,
        width: Metrics.screenWidth - 2 * (Metrics.marginSmall + Metrics.marginTiny) ,
    }
});