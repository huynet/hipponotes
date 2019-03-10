import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

class PhotoScreen extends Component {
    static navigationOptions = {
        header: null,
        transitionConfig : () => ({
            transitionSpec: {
                duration: 5,
                timing: Animated.timing,
                easing: Easing.step0,
            },
        }),
    }

    render() {
        const photo = this.props.navigation.getParam('photo', null)
        return (
            <View style={styles.container}>
                {photo ? (
                    <Image style={styles.image} source={{ uri: photo.uri }} />
                ) : (
                    <Text>No image</Text>
                )}
            </View>
        )
    }
}

export default PhotoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: 'yellow',
    },
    image: {
        flex: 1,
    },
})
