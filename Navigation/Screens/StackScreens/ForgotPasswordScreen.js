import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

export default class ForgotPasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            isLoading: ""
        }
    }
    render() {
        return (
            <View style={{
                padding: 24,
                flex: 1,
                justifyContent: "center"
            }}>
                <Text> Your email: </Text>
                <TextInput placeholder="Enter your email"
                    keyboardType="default"
                    underlineColorAndroid="#0984e3"
                    returnKeyType="next"
                    onChange={
                        (email) => {
                            this.setState({ email: email });
                        }
                    } />
                <Button title="Send" />
            </View>
        )
    }
}
