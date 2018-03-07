import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../Themes'

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: Colors.lightgrey,
        borderRadius: 2,
        borderBottomWidth: 0,
        shadowColor: Colors.black,
        shadowOffset: { width:0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginHorizontal: Metrics.marginSmall,
        marginTop: Metrics.marginSmall,
    }
});