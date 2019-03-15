import React, { Component } from 'react'
import { View, Image, TextInput, StyleSheet, Dimensions } from 'react-native'
import TagsInput from './TagsInput'

class PhotoScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            desc: '',
            emails: [],
            text: null
        }
    }

    render() {
        const photo = this.props.navigation.getParam('photo', null)
        console.log(this.state.emails)
        console.log(this.state.text)
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.titleInput}
                    placeholder="Title"
                    onChangeText={title => this.setState({ title })}
                    value={this.state.title}
                    returnKeyType="next"
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    blurOnSubmit={false}
                    autoFocus={true}
                />
                <Image style={styles.image} source={{ uri: photo.uri }} />
                <TextInput
                    ref={(input) => { this.secondTextInput = input; }}
                    style={styles.descInput}
                    placeholder="Description"
                    onChangeText={desc => this.setState({ desc })}
                    value={this.state.desc}
                    //multiline={true}
                />
                <TagsInput />
            </View>
        )
    }
}

export default PhotoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: '#F1F3FA',
    },
    titleInput: {
        height: 40,
        borderWidth: 0,
        fontFamily: 'Avenir Next',
        fontWeight: '600',
        fontSize: 20
    },
    descInput: {
        borderWidth: 0,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        fontSize: 18,
        marginTop: 5
    },
    image: {
        height: 200,
        borderRadius: 10,
    },
})
