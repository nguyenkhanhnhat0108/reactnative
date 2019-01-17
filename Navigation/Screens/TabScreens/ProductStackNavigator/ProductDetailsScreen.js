import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class ProductDetailsScreen extends Component {
    render() {
        return (
            <View>
                <Text>Product Details Screen</Text>
                <Button title="Go to products" onPress={() => {
                    this.props.navigation.navigate('ProductsScreen', { id: 999 })
                }} />
            </View>
        )
    }
}
