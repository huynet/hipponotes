import React, { Component } from 'react'
import { Text, View, Platform, StyleSheet } from 'react-native'
import TagInput from 'react-native-tag-input'

const inputProps = {
    keyboardType: 'default',
    placeholder: 'tags',
    autoFocus: true,
    style: {
        fontSize: 20,
        marginVertical: Platform.OS == 'ios' ? 10 : -2,
    },
}

class TagsInput extends Component {
    state = {
        tags: [],
        text: '',
        horizontalTags: [],
        horizontalText: '',
    }

    onChangeTags = tags => {
        this.setState({ tags })
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

    labelExtractor = tag => tag

    onChangeHorizontalTags = horizontalTags => {
        this.setState({
            horizontalTags,
        })
    }

    onChangeHorizontalText = horizontalText => {
        this.setState({ horizontalText })

        const lastTyped = horizontalText.charAt(horizontalText.length - 1)
        const parseWhen = [',', ' ', ';', '\n']

        if (parseWhen.indexOf(lastTyped) > -1) {
            this.setState({
                horizontalTags: [
                    ...this.state.horizontalTags,
                    this.state.horizontalText,
                ],
                horizontalText: '',
            })
            this._horizontalTagInput.scrollToEnd()
        }
    }

    render() {
        return (
            <View style={{ flex: 1, margin: 10, marginTop: 30, height: 100 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'lightgray',
                    }}
                >
                    <Text>To: </Text>
                    <TagInput
                        value={this.state.tags}
                        onChange={this.onChangeTags}
                        labelExtractor={this.labelExtractor}
                        text={this.state.text}
                        onChangeText={this.onChangeText}
                        //tagColor="blue"
                        //tagTextColor="white"
                        //inputProps={inputProps}
                        tagContainerStyle={styles.tagContainer}
                        tagTextStyle={styles.tagText}
                    />
                </View>
            </View>
        )
    }
}

export default TagsInput;

const styles = StyleSheet.create({
    tagContainer: {
        backgroundColor: 'yellow',
        borderRadius: 15,
        paddingTop: 5,
        paddingBottom: 5,
        height: 30
    },
    tagText: {
        fontFamily: 'Avenir Next',
        fontSize: 14
    }
})
