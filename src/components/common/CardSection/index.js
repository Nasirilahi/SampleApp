import React, { Component } from 'react';
import { View, Text } from 'react-native'
import styles from './styles'
import { Button } from 'react-native-elements';
import {Colors, Metrics} from '../../../Themes'

export default ({item: {email, address, phone, website, company}}) =>
    <View style={styles.container}>
        <View style={styles.seperator} />
        <View style={styles.sectionRow}>
            <Text style={styles.labelText}>Email: </Text>
            <Text style={styles.valueText}>{email}</Text>
        </View>
        <View style={styles.sectionRow}>
            <Text style={styles.labelText}>Address: </Text>
            <Text style={styles.valueText} numberOfLines={1}>{`${address.street} ${address.suite} ${address.city}`}</Text>
        </View>
        <View style={styles.sectionRow}>
            <Text style={styles.labelText}>Phone: </Text>
            <Text style={styles.valueText}>{phone}</Text>
        </View>
        <View style={styles.sectionRow}>
            <Text style={styles.labelText}>Website: </Text>
            <Text style={styles.valueText}>{website}</Text>
        </View>
        <View style={[styles.sectionRow, {marginBottom: Metrics.baseMargin}]}>
            <Text style={styles.labelText}>Company: </Text>
            <Text style={styles.valueText}>{company.name}</Text>
        </View>
        <Button
            title='View Details'
            onPress={() =>{}}
            backgroundColor={Colors.blue}
            borderRadius={2}
        />
    </View>
