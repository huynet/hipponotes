import React, { Component } from 'react'
import { View, Image, TextInput, StyleSheet, Dimensions } from 'react-native'

var { _height, _width } = Dimensions.get('window')

class PhotoScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }

    render() {
        const photo = this.props.navigation.getParam('photo', null)
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Title"
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                />
                <Image style={styles.image} source={{ uri: photo.uri }} />
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
    textInput: {
        height: 40,
        borderWidth: 0,
        fontFamily: 'Avenir Next',
        fontWeight: '600',
        fontSize: 20
    },
    image: {
        flex: 1,
        width: _width / 2 - 20,
        height: _height / 2 - 20,
        borderRadius: 10,
    },
})
