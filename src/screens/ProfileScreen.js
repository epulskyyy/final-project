import React, { Component, Fragment } from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

import HeaderIcon from "../components/HeaderIcon";
import BottomTab from "../components/BottomTab";
import { Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, CardItem } from "native-base";
import { connect } from "react-redux";
import { _logout } from "../reduxs/action/Auth";

class ProfileScreen extends Component {
  logout = () => {
    const navigate = this.props.navigation;
    this.props._logout(navigate);
  };
  render() {
    const { user } = this.props;
    console.log(user);

    return (
      <Fragment>
        <HeaderIcon
          title="Profile"
          // icon="menu"
          // rightElement={{
          //   menu: {
          //     icon: "more-vert",
          //     labels: ["item 1", "item 2"],
          //   },
          // }}
          // onPress={() => {
          //   this.props.navigation.openDrawer();
          // }}
          // {...this.props}
        />
        <View style={styles.container}>
          <Image
            source={require("../components/assetsImage/logo.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
            }}
          />
          <Card style={{ width: "85%", elevation: 0 }}>
            <Text
              style={{
                paddingLeft: 10,
                paddingTop: 10,
                fontSize: 17,
                color: "#061e8c",
              }}
            >
              <MaterialCommunityIconsIcon name="account" style={styles.icon2} />
              &nbsp; {user.username}
            </Text>
          </Card>
          <Card style={{ width: "85%", elevation: 0 }}>
            <Text
              style={{
                paddingLeft: 10,
                paddingTop: 10,
                fontSize: 17,
                color: "#061e8c",
              }}
            >
              <MaterialCommunityIconsIcon name="email" style={styles.icon2} />
              &nbsp; {user.email}
            </Text>
          </Card>
          <Card style={{ width: "85%", elevation: 0 }}>
            <Text
              style={{
                paddingLeft: 10,
                paddingTop: 10,
                fontSize: 17,
                color: "#061e8c",
              }}
            >
              <MaterialCommunityIconsIcon
                name="cellphone"
                style={styles.icon2}
              />
              &nbsp; {user.numberHp}
            </Text>
          </Card>
          <Card style={{ width: "85%", height: "30%", elevation: 0 }}>
            <Text
              style={{
                paddingLeft: 10,
                paddingTop: 10,
                fontSize: 17,
                color: "#061e8c",
              }}
            >
              <MaterialCommunityIconsIcon
                name="file-document"
                style={styles.icon2}
              />
              &nbsp; Your Booking History
            </Text>
          </Card>
          <Card style={{ width: "85%" }}>
            <CardItem button onPress={this.logout}>
              <Text style={{ fontSize: 17, color: "#061e8c" }}>
                <MaterialCommunityIconsIcon
                  name="logout"
                  style={styles.icon2}
                />
                &nbsp; Log Out
              </Text>
            </CardItem>
          </Card>
        </View>

        <BottomTab {...this.props} />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
export default connect(mapStateToProps, { _logout })(ProfileScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 200,
  },
  info: {
    flex: 1,
    flexDirection: "row",
    textAlign: "left",
  },
  icon1: {
    flexDirection: "column-reverse",
    backgroundColor: "transparent",
    color: "black",
    fontSize: 24,
    opacity: 0.8,
    width: 24,
    height: 24,
  },
  buttonText: {
    marginTop: 20,
    color: "#4194fa",
    backgroundColor: "#cccbc8",
  },
  buttonBook: {
    width: 150,

    backgroundColor: "#4194fa",

    fontSize: 16,
  },
  icon2: {
    fontSize: 20,
  },
});
