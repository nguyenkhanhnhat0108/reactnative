import React, { Component } from 'react'
import { Text, View, TextInput, Button, TouchableOpacity, Image, ActivityIndicator, FlatList } from 'react-native'
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class HeaderTitle extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row" }}>
                <Icon name="key" size={24}></Icon>
                <Text>LOGIN</Text>
            </View>
        )
    }
}

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoading: false,
            screen: "",
            user: [],
            loadingUsers: false,
            emailConfirm: "",
            passwordConfirm: "",
        };
        this.getUsers();
    }

    getUsers = () => {
        axios.get('https://randomuser.me/api/')
            .then(response => {
                this.setState({
                    user: response.data.results,
                }),
                    this.state.user.map((data, i) => {
                        this.setState({
                            emailConfirm: data.login.username,
                            passwordConfirm: data.login.password,
                        })
                    })

            })
    }
    onLogin = () => {
        // this.props.navigation.navigate("TabNavigator");
        if (this.state.email === this.state.emailConfirm && this.state.passwordConfirm) {
            this.props.navigation.navigate("TabNavigator");
        }
        else {
            alert("Login Fail");
        }
    }
    render() {
        return (
            <View style={{
                padding: 24,
                flex: 1,
                justifyContent: "center"
            }}>
                <Text>
                    {this.state.emailConfirm}
                </Text>
                <Text>
                    {this.state.passwordConfirm}
                </Text>
                <View style={{
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: "#0984e3",
                        marginLeft: 20,
                        fontSize: 30,
                        textAlign: "center"
                    }}>React Navite</Text>
                </View>
                <View style={{
                    flex: 3,
                    justifyContent: "center"
                }}>
                    <Text>Email:</Text>
                    <View style={{ height: 8 }}></View>
                    <TextInput placeholder="Enter your email"
                        keyboardType="default"
                        underlineColorAndroid="#0984e3"
                        returnKeyType="next"
                        onChangeText={(text) => {
                            this.setState({ email: text });
                        }} />
                    <View style={{ height: 20 }}></View>
                    <Text>Password:</Text>
                    <View style={{ height: 8 }}></View>
                    <TextInput placeholder="Enter your password"
                        keyboardType="default"
                        underlineColorAndroid="#0984e3"
                        returnKeyType="done"
                        onChangeText={(text) => {
                            this.setState({ password: text });
                        }} />
                    <View style={{ height: 20 }}></View>
                    <Button title="Đăng nhập" onPress={this.onLogin} />
                    <View style={{ height: 30 }}></View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('RegisterScreen')
                        }} >
                            <Text style={{
                                alignItems: "center"
                            }}>Đăng ký</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('ForgotPasswordScreen')
                        }} >
                            <Text style={{
                                alignItems: "center"
                            }}>Quên mật khẩu </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text>Design by NKN @COPYRIGHT</Text>
                </View>
            </View>
        )
    }
}
