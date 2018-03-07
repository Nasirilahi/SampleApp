import React, { Component } from 'react';
import { View, Text } from 'react-native'
import styles from './styles'

export default ({text, style = {}, textStyle = {}}) =>
    <View style={[styles.container, style]}>
        <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </View>