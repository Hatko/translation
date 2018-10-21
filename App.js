import React, { Component } from "react"
import { Provider } from "react-redux"
import { View, Text } from "react-native"

import store from './source/store/MainStore'
import DictionaryScreen from "./source/screens/dictionaryScreen/DictionaryScreenContainer"
import TrainingsScreen from "./source/screens/trainingsScreen/TrainingsScreenContainer"
import { createBottomTabNavigator } from 'react-navigation'

const TabBar = createBottomTabNavigator({
    Trainings: TrainingsScreen,
    Dictionary: DictionaryScreen
})

export default class App extends Component {
    render() {
        return <Provider store={store}>
            <TabBar />
        </Provider>
    }
}

console.disableYellowBox = true;
