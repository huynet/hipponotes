import React from 'react'
import { Button, Image, View } from 'react-native'
import { ImagePicker, Camera, Permissions } from 'expo'

export default class ImagePickerExample extends React.Component {
    state = {
        image: null,
        hasCameraRollPermission: null,
        type: Camera.Constants.Type.back,
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        this.setState({ hasCameraRollPermission: status === 'granted' })
    }

    render() {
        const { hasCameraRollPermission } = this.state
        let { image } = this.state

        if (hasCameraRollPermission === null) {
            return <View />
        } else if (hasCameraRollPermission === false) {
            return (
                <View>
                    <Text>No access to camera roll</Text>
                    <Text>Head to settings and free us!</Text>
                </View>
            )
        } else {
            return (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        title="Pick an image from camera roll"
                        onPress={this._pickImage}
                    />
                    {image && (
                        <Image
                            source={{ uri: image }}
                            style={{ width: 200, height: 200 }}
                        />
                    )}
                </View>
            )
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [6, 3],
        })

        console.log(result)

        if (!result.cancelled) {
            this.setState({ image: result.uri })
        }
    }
}
