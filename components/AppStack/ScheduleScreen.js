import React, { Component } from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet
} from 'react-native'
import { Agenda } from 'react-native-calendars'

import AgendaScreen from '../AgendaScreen'

class ScheduleScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <AgendaScreen />
            </SafeAreaView>
        )
    }
}

export default ScheduleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontFamily: 'Avenir Next',
        fontSize: 20,
    }
})