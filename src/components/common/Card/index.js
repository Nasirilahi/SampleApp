import React from 'react';
import {
    View,
    Text
} from 'react-native'
import styles from './styles'

export default (props) =>
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>

