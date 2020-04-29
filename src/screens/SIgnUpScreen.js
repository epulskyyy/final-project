import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { _signup } from "../reduxs/action/SignUp";
import { connect } from "react-redux";

class SignUpScreen extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    numberHp: "",
    gender: "",
    role: ["find"],
  };

  signup = () => {
    const { username, password, email, numberHp, gender, role } = this.state;
    const navigate = this.props.navigation;
    this.props._signup(
      { username, password, email, numberHp, gender, role },
      navigate
    );
    console.log(this.state);
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../components/assetsImage/logo.png")}
        />
        <TextInput
          style={styles.inputBox1}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Username"
          placeholderTextColor="grey"
          onChangeText={(username) => this.setState({ username: username })}
        />
        <TextInput
          style={styles.inputBox1}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="grey"
          onChangeText={(email) => this.setState({ email: email })}
        />
        <TextInput
          style={styles.inputBox1}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password: password })}
        />
        <TextInput
          style={styles.inputBox1}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Phone Number"
          placeholderTextColor="grey"
          onChangeText={(numberHp) => this.setState({ numberHp: numberHp })}
        />
        <TextInput
          style={styles.inputBox1}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Gender"
          placeholderTextColor="grey"
          onChangeText={(gender) => this.setState({ gender: gender })}
        />

        <TouchableOpacity style={styles.button} onPress={this.signup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={styles.signUpButton}>Back</Text>
        </TouchableOpacity>
        {/* <Button
          title="Login"
          // onPress={() => this.props.navigation.navigate("Home", this.state)}
        /> */}
      </View>
    );
  }
}
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { _signup })(SignUpScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    marginVertical: 20,
    color: "#21B68B",
    fontSize: 30,
  },
  inputBox1: {
    width: 200,
    backgroundColor: "rgb(227, 220, 220)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "grey",
    marginVertical: 10,
  },
  button: {
    width: 100,
    backgroundColor: "#4194fa",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    color: "white",
  },
  signup: {
    // marginVertical: 50,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 15,
    color: "grey",
  },
  signUpButton: {
    color: "#123e75",
    flexDirection: "row",
  },
  logo: {
    width: 350,
    height: 100,
    resizeMode: "contain",
  },
});
