import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            email: "",
            password: "",
            confirmpassword: "",
            isLoading: false,
            screen: ""
        }
    }
    render() {
        return (
            <View style={{
                padding: 24,
                flex: 1,
                justifyContent: "center"
            }}>
                <Text>Fullname:</Text>
                <View style={{ height: 8 }}></View>
                <TextInput placeholder="Enter your fullname"
                    keyboardType="default"
                    underlineColorAndroid="#0984e3"
                    returnKeyType="next"
                    onChange={
                        (fullname) => {
                            this.setState({ fullname: fullname });
                        }
                    } />
                <View style={{ height: 20 }}></View>
                <Text>Email:</Text>
                <View style={{ height: 8 }}></View>
                <TextInput placeholder="Enter your email"
                    keyboardType="default"
                    underlineColorAndroid="#0984e3"
                    returnKeyType="next"
                    onChange={
                        (email) => {
                            this.setState({ email: email });
                        }
                    } />
                <View style={{ height: 20 }}></View>
                <Text>Password:</Text>
                <View style={{ height: 8 }}></View>
                <TextInput placeholder="Enter your password"
                    keyboardType="default"
                    underlineColorAndroid="#0984e3"
                    returnKeyType="done"
                    onChange={
                        (password) => {
                            this.setState({ password: password });
                        }
                    } />
                <View style={{ height: 20 }}></View>
                <Text>ConfirmPassword:</Text>
                <View style={{ height: 8 }}></View>
                <TextInput placeholder="Enter your confirmpassword"
                    keyboardType="default"
                    underlineColorAndroid="#0984e3"
                    returnKeyType="next"
                    onChange={
                        (confirmpassword) => {
                            this.setState({ confirmpassword: confirmpassword });
                        }
                    } />
                <View style={{ height: 20 }}></View>
                <Button title="Đăng ký" />
            </View>

        )
    }
}
