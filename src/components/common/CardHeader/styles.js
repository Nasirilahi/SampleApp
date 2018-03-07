import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../../Themes'

export default StyleSheet.create({
    container: {
        paddingVertical: Metrics.marginTiny,
        paddingLeft: Metrics.marginSmall
    },
    textStyle: {
        ...Fonts.style.h1,
        fontWeight: 'normal',
        color: Colors.rose
    }
});