import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import ImageSlider from "react-native-image-slider";

class Carousel extends Component {
  state = {
    image: [
      require("../components/assetsImage/kos1.jpg"),
      require("../components/assetsImage/kos2.jpg"),
      require("../components/assetsImage/kos3.jpg"),
      require("../components/assetsImage/kos4.jpg"),
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 250, width: 350 }}>
          <ImageSlider images={this.state.image} autoPlayWithInterval={3000} />
        </View>
      </View>
    );
  }
}
export default Carousel;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    margin: 10,
  },
});
