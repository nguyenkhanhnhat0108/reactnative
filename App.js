import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SwitchNavigator from './Navigation/Screens/SwitchNavigator'
import { createAppContainer } from 'react-navigation'

const AppNavigator = createAppContainer(SwitchNavigator);
export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}
