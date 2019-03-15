import React, { Component } from 'react'
import { Text, View, Platform, StyleSheet } from 'react-native'
import TagInput from 'react-native-tag-input'

const inputProps = {
    keyboardType: 'default',
    autoFocus: false,
    style: {
        fontFamily: 'Avenir Next',
        fontSize: 14,
        fontWeight: '500',
        marginVertical: Platform.OS == 'ios' ? 4 : -2,
    },
}

const scrollViewProps = {
    scrollEnabled: false
}

class TagsInput extends Component {
    state = {
        tags: [],
        text: '',
    }

    onChangeText = text => {
        this.setState({ text })

        const lastTyped = text.charAt(text.length - 1)
        const parseWhen = [',', ' ', ';', '\n']

        if (parseWhen.indexOf(lastTyped) > -1) {
            this.setState({
                tags: [...this.state.tags, this.state.text],
                text: '',
            })
        }
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 5}}>
                <View
                    style={{
                        //flexDirection: 'row',
                        //alignItems: 'center',
                        //backgroundColor: 'lightgray',
                        height: 500
                    }}
                >
                    <TagInput
                        value={this.state.tags}
                        onChange={(tags) => this.setState(tags)}
                        labelExtractor={(tag) => tag}
                        text={this.state.text}
                        onChangeText={this.onChangeText}
                        inputProps={inputProps}
                        tagContainerStyle={styles.tagContainer}
                        tagTextStyle={styles.tagText}
                        scrollViewProps={scrollViewProps}
                    />
                </View>
            </View>
        )
    }
}

export default TagsInput;

const styles = StyleSheet.create({
    tagContainer: {
        backgroundColor: '#C7C7CD',
        borderRadius: 15,
        paddingTop: 5,
        paddingBottom: 7,
        height: 30,
        marginTop: 0,
        marginBottom: 5
    },
    tagText: {
        fontFamily: 'Avenir Next',
        fontSize: 14,
        fontWeight: '500',
        color: 'black'
    }
})
