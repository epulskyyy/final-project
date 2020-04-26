import React, { Component } from 'react'
import { Content } from 'native-base'

export default class Sementara extends Component {
    render() {
        return (
            <>
                <ScrollView vertical>

                    {/* display all list */}
                        <View style={{ backgroundColor: 'white', height: 190 }}>
                            <View elevation={10} style={{ marginHorizontal: 20, backgroundColor: 'white', height: 150, marginTop: 20, borderRadius: 10, flexDirection: 'row' }}>
                                <Image source={{ uri: `https://mamikos.herokuapp.com/static/` }} style={{ width: "100%", height: '100%', resizeMode: "cover", flex: 1, borderRadius: 10 }} />
                                <View style={{ backgroundColor: 'white', flex: 2.2, borderRadius: 10, flexDirection: 'column' }}>
                                    <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 10 }}>
                                        <Text ellipsizeMode='tail' numberOfLines={1} style={{ fontFamily: 'Lato-Bold', marginTop: 20, marginLeft: 10, fontSize: 14 }}>

                                        </Text>
                                    </View>
                                    <View style={{ backgroundColor: 'white', flex: 1, flexDirection: 'row' }}>
                                        <View style={{ backgroundColor: 'white', flex: 1, flexDirection: 'column' }}>
                                            <Text style={{ fontFamily: 'Lato-Regular', marginTop: 7, marginLeft: 10, fontSize: 13 }}>
                                                Booking
                                            </Text>
                                            <Text style={{ fontFamily: 'Lato-Regular', marginTop: 0, marginLeft: 10, fontSize: 13 }}>

                                            </Text>
                                        </View>
                                        <View style={{ backgroundColor: 'white', flex: 1.3, flexDirection: 'column' }}>
                                            <Text style={{ fontFamily: 'Lato-Regular', marginTop: 7, marginLeft: 10, fontSize: 13 }}>
                                                Durasi Sewa
                                        </Text>
                                            <Text style={{ fontFamily: 'Lato-Regular', marginTop: 0, marginLeft: 10, fontSize: 13 }}>
                                                1 bulan
                                        </Text>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 10 }}>
                                        <Button style={{ borderRadius: 10, height: 30, width: 160, marginRight: 5, marginTop: 10, marginLeft: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#0baa56' }}>
                                            <Text style={{ color: '#0baa56', fontSize: 14, fontFamily: 'Lato-Semibold', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }} uppercase={false}>
                                            </Text>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </View>
                </ScrollView>
            </>
                )
            }
        }
