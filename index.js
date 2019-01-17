/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import LoginScreen from './Navigation/Screens/StackScreens/LoginScreen'
import RegisterScreen from './Navigation/Screens/StackScreens/RegisterScreen'
import ForgotPasswordScreen from './Navigation/Screens/StackScreens/ForgotPasswordScreen'
AppRegistry.registerComponent(appName, () => App);
