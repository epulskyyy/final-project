import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Axios from "axios";
import { Image, Button } from "native-base";

export default class App extends React.Component {
  state = {
    maps: {},
  };
  componentDidMount() {
    const { name } = this.props.route.params;
    Axios.get(`http://10.10.12.71:9876/api/location/kost/${name.name}`)
      .then((result) => {
        console.log(result);

        const mapAfter = result.data;

        this.setState({
          maps: mapAfter,
        });
        console.log("this.state.maps");
        console.log(this.state.maps.latitude);
      })
      .catch((error) => {
        console.log(name);
        console.log(error.message);
      });
  }
  render() {
    const { maps } = this.state;
    return (
      <>
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: Number(maps.latitude),
              longitude: Number(maps.longitude),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: Number(maps.latitude),
                longitude: Number(maps.longitude),
              }}
            ></Marker>
          </MapView>
        </View>
        <View style={styles.container1}>
          <View style={styles.buttonContainer}>
            <Button
              title="DETAIL KOS"
              color="#242dab"
              onPress={() =>
                this.props.navigation.navigate("DetailKost", this.state)
              }
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="MAP"
              onPress={() => this.props.navigation.navigate("Map", this.state)}
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container1: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
