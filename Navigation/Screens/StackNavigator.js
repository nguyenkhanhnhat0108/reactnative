import { createStackNavigator, createAppContainer } from 'react-navigation'
import React, { Component } from 'react'
import { View, Text } from 'react-native'

import LoginScreen from './StackScreens/LoginScreen'
import RegisterScreen from './StackScreens/RegisterScreen'
import ForgotPasswordScreen from './StackScreens/ForgotPasswordScreen'

const routeConfigs = {
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Login",
            header: null,
        }),
    },
    RegisterScreen: {
        screen: RegisterScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Register",
            // header: () => {
            //     return (
            //         <View style={{
            //             height: 30,
            //             backgroundColor: "green"
            //         }}>
            //             <Text>My Test</Text>
            //         </View>
            //     )
            // }
        }),
    },
    ForgotPasswordScreen: {
        screen: ForgotPasswordScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Forgot Password"
        })
    }
}
const stackNavigatorConfig = {
    mode: 'modal', // truoc len,
    headerMode: 'float',
    headerBackTitleVisible: false,
    cardShadowEnabled: true,
    cardOverlayEnabled: true
};
const stackNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
export default stackNavigator;