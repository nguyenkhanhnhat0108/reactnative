import { createStackNavigator, createAppContainer } from 'react-navigation'

import LoginScreen from './StackScreens/LoginScreen'
import RegisterScreen from './StackScreens/RegisterScreen'
import ForgotPasswordScreen from './StackScreens/ForgotPasswordScreen'

const routeConfigs = {
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Login"
        }),
    },
    RegisterScreen: {
        screen: RegisterScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Register"
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
};
const stackNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
export default stackNavigator;