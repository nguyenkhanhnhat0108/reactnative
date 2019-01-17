import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import StackNavigator from './StackNavigator'
import TabNavigator from './TabNavigator'

const routeConfigs = {
    StackNavigator: StackNavigator,
    TabNavigator: TabNavigator,
}

const switchNavigatorConfig = {};

const switchNavigator = createSwitchNavigator(routeConfigs, switchNavigatorConfig);
export default createAppContainer(switchNavigator)