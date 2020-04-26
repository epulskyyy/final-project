import React, { Component } from "react";
import HomeScreen from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";

const Drawer = createDrawerNavigator();
export default class HomeDrawer extends Component {
  render() {
    const { username, password } = this.props.route.params;
    return (
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ username, password }}
        />
        <Drawer.Screen name="Chat" component={ChatScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="LogOut" component={LoginScreen} />
      </Drawer.Navigator>
    );
  }
}
