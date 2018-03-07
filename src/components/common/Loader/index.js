import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import {Colors} from '../../../Themes'
import styles from './styles'

export default () =>
    <View style={styles.spinnerView}>
        <ActivityIndicator
            animating={true}
            style={styles.centering}
            size={'small'}
            color={Colors.white}
        />
    </View>