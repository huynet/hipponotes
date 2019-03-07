import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Camera, ImagePicker, Permissions, Svg } from 'expo'

class CameraScreen extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({ hasCameraPermission: status === 'granted' })
    }

    snap = async () => {
        console.log('TEST')
        if (this.camera) {
            let photo = await this.camera.takePictureAsync()
            await this.setState({ photo: photo })
            await console.log('Photo is')
            console.log(this.state.photo)
        } else console.log('not a cam')
    }

    render() {
        const { hasCameraPermission } = this.state
        if (hasCameraPermission === null) {
            return <View />
        } else if (hasCameraPermission === false) {
            return (
                <View>
                    <Text>No access to camera</Text>
                    <Text>Head to settings and free us!</Text>
                </View>
            )
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera
                        style={{ flex: 1 }}
                        type={this.state.type}
                        ref={ref => {
                            this.camera = ref
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    flex: 0.2,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.props.navigation.navigate('Photo', {
                                        photo: this.state.photo,
                                    })
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        marginBottom: 40,
                                        color: 'white',
                                    }}
                                >
                                    {' '}
                                    Flip{' '}
                                </Text>
                            </TouchableOpacity>

                            {/* Snap */}
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 40,
                                }}
                                onPress={() => {
                                    this.snap()
                                }}
                            >
                                <Image
                                    style={{
                                        height: 60,
                                        width: 60,
                                    }}
                                    source={{
                                        uri:
                                            'http://icons.iconarchive.com/icons/martz90/circle/256/video-camera-icon.png',
                                    }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    flex: 0.2,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.setState({
                                        type:
                                            this.state.type ===
                                            Camera.Constants.Type.back
                                                ? Camera.Constants.Type.front
                                                : Camera.Constants.Type.back,
                                    })
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        marginBottom: 40,
                                        color: 'white',
                                    }}
                                >
                                    {' '}
                                    Go{' '}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            )
        }
    }
}

export default CameraScreen
