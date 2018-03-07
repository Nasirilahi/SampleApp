import {StyleSheet} from 'react-native';
import {Colors} from '../../../Themes'

export default StyleSheet.create({
    spinnerView:{
        flex: 1,
        backgroundColor: Colors.black,
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },

});