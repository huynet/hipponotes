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
            
            this.props.navigation.navigate('Photo', {
                photo: this.state.photo,
            });
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
                                    //alignSelf: 'flex-start',
                                    //alignItems: 'center',
                                    position: 'absolute',
                                }}
                                onPress={() => {
                                    this.props.navigation.goBack()
                                }}
                            >
                                <Image
                                    style={{
                                        height: 30,
                                        width: 30,
                                        marginTop: 60,
                                        marginLeft: 40,
                                    }}
                                    source={require('../assets/back.png')}
                                />
                            </TouchableOpacity>

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
                                <Image
                                    style={{
                                        height: 40,
                                        width: 40,
                                        marginBottom: 50,
                                        marginLeft: 80,
                                    }}
                                    source={require('../assets/album.png')}
                                />
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
                                    this.snap();
                                }}
                            >
                                <Image
                                    style={{
                                        height: 60,
                                        width: 60,
                                    }}
                                    source={require('../assets/snap.png')}
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
                                <Image
                                    style={{
                                        height: 40,
                                        width: 40,
                                        marginBottom: 50,
                                        marginRight: 80,
                                    }}
                                    source={require('../assets/reverse.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            )
        }
    }
}

export default CameraScreen
