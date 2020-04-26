import React from "react";
import { View, StyleSheet, Text } from "react-native";

class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}></Text>
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: "14",
  },
});
