import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function ButtonPeople(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="ios-man" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(33,182,139,1)",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 19,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
  },
  icon: {
    color: "rgba(250,247,247,1)",
    fontSize: 40,
    alignSelf: "center",
  },
});

export default ButtonPeople;
