import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle}
        initialRegion={{
            latitude: -6.301486201275736,
            longitude: 106.73522774610166,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        >
          
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',
    
  },
  mapStyle: {
    width: 410,
    height: 400,
  },
});