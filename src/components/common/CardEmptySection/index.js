import React, { Component } from 'react';
import { View, Text } from 'react-native'
import styles from './styles'
import { Button } from 'react-native-elements';
import {Colors} from '../../../Themes'

export default ({text, style = {}, textStyle = {}}) =>
    <View style={[styles.container, style]}>
        <View style={styles.seperator} />
        <Text style={[styles.textStyle, textStyle]}>{text}</Text>
        <Button
            title='Get more Cards'
            onPress={() =>{}}
            backgroundColor={Colors.blue}
            borderRadius={2}
        />
    </View>