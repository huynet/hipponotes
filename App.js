import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation'

import ScheduleScreen from './components/AppStack/ScheduleScreen'
import ClassesScreen from './components/AppStack/ClassesScreen'
import ProfileScreen from './components/AppStack/ProfileScreen'

import PhotoScreen from './components/PhotoScreen'
import CameraScreen from './components/CameraScreen'
import CameraRollScreen from './components/CameraRollScreen'

import ClassDetail from './components/ClassDetail'
import ListCard from './components/ListCard'

import ProfileSettings from './components/ProfileSettings'

const ScheduleStack = createStackNavigator({
    Schedule: {
        screen: ScheduleScreen,
    },
    Camera: {
        screen: CameraScreen,
        navigationOptions: {
            header: null,
        },
    },
    CameraRoll: {
        screen: CameraRollScreen,
    },
    Photo: {
        screen: PhotoScreen,
    },
})

ScheduleStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index == 1) {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}

const ClassesStack = createStackNavigator({
    Classes: {
        screen: ClassesScreen,
    },
    Detail: {
        screen: ClassDetail,
    },
})

const ProfileStack = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
    },
    Settings: {
        screen: ProfileSettings,
    },
})

const AppStack = createBottomTabNavigator({
    Schedule: {
        screen: ScheduleStack,
        navigationOptions: {
            tabBarLabel: 'Snaps',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="md-calendar" color={tintColor} size={24} />
            ),
        },
    },
    Classes: {
        screen: ClassesStack,
        navigationOptions: {
            tabBarLabel: 'Classes',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-albums" color={tintColor} size={24} />
            ),
        },
    },
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-person" color={tintColor} size={24} />
            ),
        },
    },
})

const App = createAppContainer(AppStack)

export default App
