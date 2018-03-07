import { StyleSheet, Platform} from 'react-native';
import {ApplicationStyles, Metrics} from '../../../Themes'
const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    container:{
        flex:1,
        paddingTop: (Platform.OS === 'ios') ? Metrics.marginFull : 0
    }
});

export default styles;