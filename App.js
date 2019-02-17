// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
// import styled from "styled-components"
// import Card from './components/Card';
// import ListCard from './components/ListCard'

// export default class App extends Component {

//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView 
//           style={styles.container}
//           showsVerticalScrollIndicator={false}
//         >
//           <View style={styles.titleBar}>
//             <Image style={styles.avatar} source={require('./assets/huy.jpg')} />
//             <Text style={styles.title}>Welcome back,</Text>
//             <Text style={styles.name}>Huy Pham</Text>   
//           </View>

//           <Text style={styles.subTitle}>
//             Your classes
//           </Text>

//           <SafeAreaView
//             style={styles.classes}
//           >
//             <ListCard 
//               title="CS2336" 
//               color="#E8384F" 
//               desc="Introduction to Computer Science 2"
//             />
//             <ListCard 
//               title="CS2305" 
//               color="#FD612C" 
//               desc="Discrete Mathematics"
//             />
//             <ListCard 
//               title="MATH2418" 
//               color="#A4CF30"
//               desc="Linear Algebra" 
//             />
//             <ListCard 
//               title="MATH2419" 
//               color="#62D26F" 
//               desc="Calculus 2"
//             />
//           </SafeAreaView>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(255, 255, 255)'
//   },
//   cover: {

//   },
//   avatar: {
//     width: 44,
//     height: 44,
//     backgroundColor: 'black',
//     borderRadius: 22,
//     marginLeft: 30,
//     position: 'absolute',
//     top: 0,
//     left: 0
//   },
//   titleBar: {
//     width: '100%',
//     marginTop: 50,
//     paddingLeft: 90,
//   },
//   title: {
//     fontSize: 16,
//     fontFamily: 'Avenir Next',
//     color: '#b8bece',
//     fontWeight: '500',
//   },
//   subTitle: {
//     fontSize: 15,
//     fontFamily: 'Avenir Next',
//     color: '#b8bece',
//     fontWeight: '600',
//     marginLeft: 30,
//     marginTop: 25,
//     textTransform: 'uppercase'
//   },
//   name: {
//     fontSize: 20,
//     fontFamily: 'Avenir Next',
//     color: '#3c4560',
//     fontWeight: '700',
//     marginTop: -3
//   },
//   classes: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-evenly',
//   }
// });

import React from 'react';
import { 
     TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { 
     createStackNavigator,
     createSwitchNavigator, 
     createBottomTabNavigator,
     createAppContainer
} from 'react-navigation'

import ScheduleScreen from './components/AppStack/ScheduleScreen';
import ClassesScreen from './components/AppStack/ClassesScreen';
import ProfileScreen from './components/AppStack/ProfileScreen';

import ClassDetail from './components/ClassDetail'
import ListCard from './components/ListCard'

//const ScheduleStack;

const ClassesStack = createStackNavigator({
     Classes: {
          screen: ClassesScreen
     },
     Detail: {
          screen: ClassDetail
     }
})

// const ProfileStack

const AppStack = createBottomTabNavigator({
     Schedule: {
          screen: ScheduleScreen,
          navigationOptions: {
               tabBarLabel: 'Schedule',
               tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-calendar" color={tintColor} size={24}/>
               )
          }
     },
     Classes: {
          screen: ClassesStack,
          navigationOptions: {
               tabBarLabel: 'Classes',
               tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-albums" color={tintColor} size={24}/>
               )
          }
     },
     Profile: {
          screen: ProfileScreen,
          navigationOptions: {
               tabBarLabel: 'Profile',
               tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-person" color={tintColor} size={24}/>
               )
          }
     }
})

const App = createAppContainer(AppStack)

export default App;