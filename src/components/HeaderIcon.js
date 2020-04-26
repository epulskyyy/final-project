import React, { Component } from "react";
import { Toolbar } from "react-native-material-ui";
import { View, StyleSheet, StatusBar } from "react-native";

export default class HeaderIcon extends Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <StatusBar backgroundColor="#242dab" translucent />
        <Toolbar
          style={{
            container: { backgroundColor: "#242dab" },
          }}
          leftElement={this.props.icon}
          centerElement={this.props.title}
          onRightElementPress={(label) => {
            console.log(label);
          }}
          onLeftElementPress={this.props.onPress}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
  },
});