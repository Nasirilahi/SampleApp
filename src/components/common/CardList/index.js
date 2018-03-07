import React, { Component } from 'react';
import { View, Text } from 'react-native'
import Card from '../Card'
import CardHeader from '../CardHeader'
import CardSection from '../CardSection'

export default class CardList extends Component {

    renderCards = () => this.props.data.map((dataItem, index) =>
            <Card key={index}>
                <CardHeader text={dataItem.name} textStyle={{textAlign: 'center'}} />
                <CardSection item={dataItem} />
            </Card>
    )

    render() {
        return (
            <View>
                {
                    this.renderCards()
                }
            </View>
        )

    }
}