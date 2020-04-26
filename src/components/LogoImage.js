import React, { Component } from 'react'
import { View } from 'native-base'

export default class LogoImage extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require('../components/assetsImage/logo.png')}
                    style={{ width: 40, height: 40, borderRadius: 40 / 2, marginLeft: 15 }}
                />
            </View>
        )
    }
}
