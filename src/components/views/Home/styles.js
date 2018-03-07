import { StyleSheet} from 'react-native';
import {ApplicationStyles, Metrics} from '../../../Themes'
const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    container:{
        flex:1,
        paddingTop: Metrics.marginFull
    }
});

export default styles;