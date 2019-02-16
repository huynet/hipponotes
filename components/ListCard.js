import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const _margin = 30;
const _borderRadius = 8;
const _width = Dimensions.get("window").width - _margin * 2
const _height = 70

class Card extends Component {
     render() {
          const { title, color, desc } = this.props
          return(
               <View 
                    style={[styles.container, {backgroundColor: color}]}
               >
                    <View style={styles.cover}>
                         <Text style={styles.title}>
                              {title}
                         </Text>
                         <Text style={styles.desc}>
                              {desc}
                         </Text>
                    </View>
               </View>
          )
     }
}

export default Card;

const styles = StyleSheet.create({
     container: {
          // backgroundColor: 'rgb(255, 45, 18)',
          width: _width,
          height: _height,
          borderRadius: _borderRadius,
          marginTop: 15,
     },
     cover: {

     },
     title: {
          fontSize: 20,
          fontFamily: 'Avenir Next',
          color: 'white',
          fontWeight: '600',
          margin: 10,
          marginBottom: 0
     },
     desc: {
          fontSize: 14,
          fontFamily: 'Avenir Next',
          color: 'white',
          marginLeft: 10,
          marginRight: 10,
          fontWeight: '600'
     }
});