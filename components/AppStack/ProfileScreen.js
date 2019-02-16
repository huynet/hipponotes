import React, { Component } from 'react';
import {
     View,
     Text,
     StyleSheet
} from 'react-native'

class ProfileScreen extends Component {
     render() {
          return (
               <View style={styles.container}>
                    <Text style={styles.text}>
                         ProfileScreen
                    </Text>
               </View>
          )
     }
}

export default ProfileScreen;

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