import React, { Component } from 'react'
import { View } from 'native-base'

export default class MapBuatEdit extends Component {
    render() {
        return (
            <View>
                <Marker
          coordinate={{
            latitude: -6.301486201275736,
            longitude: 106.73522774610166
          }}
          title="Ternak Kost Maps"
          description="Mencari lokasi kos terdekat dari sini"
          showsUserLocation={true}
          showsCompass={true}
          showsTraffic={true}
          draggable
          onDragEnd={ (e) => {

            
              Axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=kosan&location=42.3675294,-71.186966&radius=10000&key=AIzaSyCfwPxf0rNxqGbU71i-TaKTEPHXeDiyJPc`)
              .then(r => {
                

                if(r.data.formatted_address !== undefined){
                  this.props.getlocation(r.data.name,r.data.formatted_address)

                }else{
                  this.props.getlocation(r.dataname,r.data.formatted_address.kota)
                }
                
              }).catch(err => alert(err))
              this.props.sendData(e.nativeEvent.coordinate.latitude.toString(),e.nativeEvent.coordinate.longitude.toString())
          
            
            
          }}>


            <Image source={require('../components/assetsImage/booking.svg')} style={{height: 55,width: 50,resizeMode:'stretch'}} />

          </Marker>
            </View>
        )
    }
}
