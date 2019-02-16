import React, { Component } from 'react';
import {
     View,
     Text,
     StyleSheet
} from 'react-native'

class ScheduleScreen extends Component {
     render() {
          return (
               <View style={styles.container}>
                    <Text style={styles.text}>
                         ScheduleScreen
                    </Text>
               </View>
          )
     }
}

export default ScheduleScreen;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
     },
     text: {
          fontFamily: 'Avenir Next',
          fontSize: 20,
     }
})