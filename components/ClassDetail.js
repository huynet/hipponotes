import React, { Component } from 'react';
import {
     View,
     Text,
     StyleSheet
} from 'react-native';

class ClassDetail extends Component {
     render() {
          return (
               <View style={styles.container}>
                    <Text style={styles.text}>
                         ClassDetail.js
                    </Text>
               </View>
          )
     }
}

export default ClassDetail;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
     },
     text: {
          fontFamily: 'Avenir Next',
          fontSize: 20
     }
})