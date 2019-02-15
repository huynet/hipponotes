import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import styled from "styled-components"
import Card from './components/Card';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleBar}>
            <Image style={styles.avatar} source={require('./assets/huy.jpg')} />
            <Text style={styles.title}>Welcome back,</Text>
            <Text style={styles.name}>Huy Pham</Text>   
          </View>

          <Text style={styles.subTitle}>
            Your classes
          </Text>

          <SafeAreaView
            style={styles.classes}
          >
            <Card 
              title="CS2336" 
              color="rgb(236, 87, 93)" 
              desc="Introduction to Computer Science 2"
            />
            <Card 
              title="CS2305" 
              color="rgb(245, 188, 65)" 
              desc="Discrete Mathematics"
            />
            <Card 
              title="MATH2418" 
              color="rgb(61, 147, 231)"
              desc="Linear Algebra" 
            />
            <Card 
              title="MATH2419" 
              color="rgb(101, 200, 122)" 
              desc="Calculus 2"
            />
            <Card 
              title="CGS2301.HN1" 
              color="rgb(125, 98, 230)" 
              desc="Cognitive Science"
            />
            <Card 
              title="ACM" 
              color="rgb(236, 87, 93)"
              desc="ACM Projects"
            />
                        <Card 
              title="MATH2419" 
              color="rgb(101, 200, 122)" 
              desc="Calculus 2"
            />
            <Card 
              title="CGS2301.HN1" 
              color="rgb(125, 98, 230)" 
              desc="Cognitive Science"
            />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3f5'
  },
  cover: {

  },
  avatar: {
    width: 44,
    height: 44,
    backgroundColor: 'black',
    borderRadius: 22,
    marginLeft: 20,
    position: 'absolute',
    top: 0,
    left: 0
  },
  titleBar: {
    width: '100%',
    marginTop: 50,
    paddingLeft: 75,
  },
  title: {
    fontSize: 16,
    color: '#b8bece',
    fontWeight: '500',
  },
  subTitle: {
    color: '#b8bece',
    fontWeight: '600',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 40,
    textTransform: 'uppercase'
  },
  name: {
    fontSize: 20,
    color: '#3c4560',
    fontWeight: '700'
  },
  classes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  }
});