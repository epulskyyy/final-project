import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ChatScreen from './src/screens/ChatScreen';
import SignUpScreen from './src/screens/SIgnUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListKostScreen from './src/screens/ListKostScreen';
import DetailKost from './src/screens/DetailKost';
import BookingScreen from './src/screens/BookingScreen';
import { Provider } from 'react-redux';
import store from './src/reduxs/store';
export default function App() {
  console.disableYellowBox = true;
  const Stack = createStackNavigator();
  const navOptionHandler = () => ({
    headerShown: false,
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={navOptionHandler}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={navOptionHandler}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={navOptionHandler}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={navOptionHandler}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={navOptionHandler}
          />
          <Stack.Screen
            name="ListKost"
            component={ListKostScreen}
            options={navOptionHandler}
          />
          <Stack.Screen
            name="DetailKost"
            component={DetailKost}
            options={navOptionHandler}
          />
          <Stack.Screen
            name="BookKost"
            component={BookingScreen}
            options={navOptionHandler}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// import React from "react";
// import { StyleSheet, Text, View, Button } from "react-native";
// import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import Icon from "react-native-vector-icons/Ionicons";

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }
// class ProfileScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Profile Screen</Text>
//       </View>
//     );
//   }
// }
// class ImageScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Image Screen</Text>
//       </View>
//     );
//   }
// }
// class CartScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Cart Screen</Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
// const TabNavigator = createMaterialBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         tabBarLabel: "Home",
//         tabBarIcon: ({ tintColor }) => (
//           <View>
//             <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
//           </View>
//         ),
//       },
//     },
//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         tabBarLabel: "Profile",
//         tabBarIcon: ({ tintColor }) => (
//           <View>
//             <Icon
//               style={[{ color: tintColor }]}
//               size={25}
//               name={"ios-person"}
//             />
//           </View>
//         ),
//         inactiveColor: "#ffff",
//       },
//     },
//     Image: {
//       screen: ImageScreen,
//       navigationOptions: {
//         tabBarLabel: "History",
//         tabBarIcon: ({ tintColor }) => (
//           <View>
//             <Icon
//               style={[{ color: tintColor }]}
//               size={25}
//               name={"ios-images"}
//             />
//           </View>
//         ),
//         inactiveColor: "#ffff",
//       },
//     },
//     Cart: {
//       screen: CartScreen,
//       navigationOptions: {
//         tabBarLabel: "Cart",
//         tabBarIcon: ({ tintColor }) => (
//           <View>
//             <Icon style={[{ color: tintColor }]} size={25} name={"ios-cart"} />
//           </View>
//         ),
//       },
//     },
//   },
//   {
//     initialRouteName: "Home",
//     inactiveColor: "#ffff",
//   }
// );

// export default createAppContainer(TabNavigator);
