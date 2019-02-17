import React, { Component } from 'react';
import {
     View,
     Text,
     StyleSheet
} from 'react-native';

class ClassDetail extends Component {
     static navigationOptions = ({ navigation, screenProps }) => ({
          title: navigation.state.params.title,
          headerTitleStyle: {
               fontFamily: 'Avenir Next',
          },
     });

     render() {
          const { navigation } = this.props;
          const title = navigation.getParam('title', '');
          const color = navigation.getParam('color', 'white');
          const desc = navigation.getParam('desc', '')

          return (
               <View style={styles.container}>
                    <Text style={styles.text}>
                         {title}
                    </Text>
                    <Text style={[styles.text, {backgroundColor: color}]}>
                         {desc}
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