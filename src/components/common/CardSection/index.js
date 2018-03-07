import React, { Component } from 'react';
import { View, Text } from 'react-native'
import styles from './styles'

export default ({item: {email, address, phone, website, company}}) =>
    <View style={styles.container}>
        <View style={styles.sectionRow}>
            <Text style={styles.labelText}>Email: </Text>
            <Text style={styles.valueText}>{email}</Text>
        </View>
        <View style={styles.sectionRow}>
            <Text style={styles.labelText}>Address: </Text>
            <Text style={styles.valueText}>{`${address.street} ${address.suite} ${address.city}`}</Text>
        </View>
        <View style={styles.sectionRow}>
            <Text style={styles.labelText}>Phone: </Text>
            <Text style={styles.valueText}>{phone}</Text>
        </View>
        <View style={styles.sectionRow}>
            <Text style={styles.labelText}>Website: </Text>
            <Text style={styles.valueText}>{website}</Text>
        </View>
        <View style={styles.sectionRow}>
            <Text style={styles.labelText}>Company: </Text>
            <Text style={styles.valueText}>{company.name}</Text>
        </View>
    </View>
