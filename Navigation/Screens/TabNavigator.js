import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import AccountScreen from './TabScreens/AccountScreen'
import HomeScreen from './TabScreens/HomeScreen'

import ProductStackNavigator from './TabScreens/ProductStackNavigator'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const routeConfigs = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Trang chủ',
      tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon style={{ color: 'white' }} name="home" size={20} />
    }),
  },
  ProductStackNavigator: {
    screen: ProductStackNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Sản phẩm',
      tabBarIcon: <Icon name="apps" size={20} style={{ color: 'white' }} />
    }),
  },
  AccountScreen: {
    screen: AccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Tài khoản',
      tabBarIcon: <Icon name="account" size={20} style={{ color: 'white' }} />
    }),
  }
};
const tabNavigatorConfig = {
  lazy: true,
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    activeBackgroundColor: '#fd79a8',
    inactiveBackgroundColor: '#0984e3',
    showLabel: false,
    safeAreInset: {
      bottom: "never",
      top: "never",
    },
    // tabStyle: { paddingBottom: 24 },
    // style: { height: 80 }
  }
};

const tabNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);
export default tabNavigator;