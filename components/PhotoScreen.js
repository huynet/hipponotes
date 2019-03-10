import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

class PhotoScreen extends Component {
    static navigationOptions = {
        header: null
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
        backgroundColor: '#F1F3FA',
    },
    image: {
        flex: 1,
        borderRadius: 10,
    },
})
