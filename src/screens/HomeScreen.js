import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  AsyncStorage,
  Animated,
} from "react-native";
import HeaderIcon from "../components/HeaderIcon";
import BottomTab from "../components/BottomTab";
import Carousel from "../components/Carousel";
import logo from "../components/assetsImage/logo.png";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Home from "../components/Home";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { _loadSession } from "../reduxs/action/Auth";
import { connect } from "react-redux";
import { Card, Col } from "native-base";

const { width } = Dimensions.get("window");

class HomeScreen extends Component {
  render() {
    return (
      <>
        <HeaderIcon
          title="Ternak Kos"
          image={logo}
          // icon="menu"
          // onPress={() => {
          //   this.props.navigation.openDrawer();
          // }}
          // {...this.props}
        >
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Coba Jakarta"
            placeholderTextColor="grey"
            style={{
              flex: 1,
              fontWeight: "700",
              backgroundColor: "white",
            }}
          />
        </HeaderIcon>
        <ScrollView scrollEventThrottle={16}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              paddingHorizontal: 15,
              marginTop: 10,
            }}
          >
            Silahkan pilih kategori kos
          </Text>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button2}
              onPress={() =>
                this.props.navigation.navigate("ListKost", {
                  category: "putra",
                })
              }
            >
              <MaterialCommunityIconsIcon
                name="human-male"
                style={styles.icon1}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.buttonText}>Kos Putra</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("ListKost", {
                  category: "putri",
                })
              }
              style={styles.button2}
            >
              <MaterialCommunityIconsIcon
                name="human-female"
                style={styles.icon1}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.buttonText}>Kos Putri</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() =>
                this.props.navigation.navigate("ListKost", {
                  category: "campur",
                })
              }
            >
              <MaterialCommunityIconsIcon
                name="human-male-female"
                style={styles.icon2}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.buttonText}>Kos Campur</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              paddingHorizontal: 15,
              marginTop: 20,
            }}
          >
            Apa sih Ternak Kos?
          </Text>
          <Text
            style={{
              fontSize: 14,
              paddingHorizontal: 15,
              marginTop: 2,
            }}
          >
            Ternak Kos merupakan pilihan terbaru dalam mencari tempat kost yang
            nyaman dan berkualitas !
          </Text>
          <View style={styles.container}>
            <Carousel />
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            ></View>
            <Text style={styles.why}>Mengapa Ternak Kos ?</Text>

            <View
              style={{
                flexDirection: "row",
                height: 100,
                padding: 20,
              }}
            >
              <Image
                style={styles.review}
                source={require("../review/cari-mudah.bd90ceed.png")}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  paddingHorizontal: 15,
                  textAlign: "center",
                }}
              >
                Pencarian Mudah
              </Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                paddingHorizontal: 15,
                textAlign: "center",
                flexDirection: "column",
              }}
            >
              Tinggal pilih kos sesuai kategori yang tersedia, Sekarang !
            </Text>

            <View
              style={{
                flexDirection: "row",
                height: 100,
                padding: 20,
                marginTop: 10,
              }}
            >
              <Image
                style={styles.review}
                source={require("../review/terpercaya.941f7245.png")}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  paddingHorizontal: 15,
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                Terpercaya
              </Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                paddingHorizontal: 15,
                textAlign: "center",
              }}
            >
              Kos yang telah terverifikasi, dilengkapi dengan peta lokasi, serta
              foto galeri !
            </Text>
            <View
              style={{
                flexDirection: "row",
                height: 100,
                padding: 20,
                marginTop: 10,
              }}
            >
              <Image
                style={styles.review}
                source={require("../review/booking.de0d93d2.png")}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  paddingHorizontal: 15,
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                Bisa Booking
              </Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                paddingHorizontal: 15,
                textAlign: "center",
              }}
            >
              Langsung bisa booking yang sesuai keinginanmu, kapan saja !
            </Text>
          </View>
        </ScrollView>
        <BottomTab {...this.props} />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { _loadSession })(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    marginTop: 15,
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 25,
  },
  category: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 20,
  },
  button2: {
    width: 85,
    height: 50,
    backgroundColor: "transparent",
    borderColor: "#4194fa",
    borderRadius: 0,
    borderWidth: 0,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#123e75",
    fontSize: 30,
    opacity: 0.8,
    width: 24,
    height: 30,
    marginHorizontal: 11,
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#123e75",
    fontSize: 30,
    opacity: 0.8,
    width: 26,
    height: 30,
    marginHorizontal: 10,
  },
  review: {
    width: 100,
    height: 50,
    resizeMode: "contain",

    flexDirection: "column",
  },
  why: {
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
});