import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Button } from "react-native";
import HeaderIcon from "../components/HeaderIcon";
import Maps from "../components/Maps";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import NumberFormat from "react-number-format";

export default class DetailKost extends Component {
  render() {
    const {
      id,
      name,
      kontakPemilik,
      address,
      description,
      luasKamar,
      imageUrl,
      jumlahKamar,
      pemilik,
      price,
      category,
      fasilitas,
    } = this.props.route.params;
    return (
      <>
        <HeaderIcon
          title="Detail Kost"
          icon="arrow-back"
          onPress={() => this.props.navigation.navigate("ListKost", this.state)}
        />
        <ScrollView>
          <Image
            style={{ width: "100%", height: 250, resizeMode: "stretch" }}
            source={{ uri: imageUrl }}
          ></Image>
          <View style={{ backgroundColor: "white", height: 120 }}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ color: "#4A92E6", marginLeft: 20, fontSize: 19 }}>
                {category}
              </Text>
              <Text style={{ color: "gray", marginLeft: 10 }}>{"\u2022"}</Text>
              <Text style={{ color: "#ec7e2f", marginLeft: 10, fontSize: 18 }}>
                Kamar Tersedia : {jumlahKamar}
              </Text>
              <Text style={{ color: "gray", marginLeft: 10 }}>{"\u2022"}</Text>
              <NumberFormat
                renderText={(text) => (
                  <Text
                    style={{ color: "#ec7e2f", marginLeft: 10, fontSize: 18 }}
                  >
                    {text}
                  </Text>
                )}
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp"}
              />
            </View>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ color: "black", marginLeft: 20, fontSize: 21 }}>
                {name}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ color: "black", marginLeft: 20, fontSize: 21 }}>
                {address}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#dbdbdb",
              height: 1,
              marginHorizontal: 20,
            }}
          ></View>

          <View
            style={{
              backgroundColor: "white",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 0 }}>
              <Text style={{ color: "black", marginLeft: 0, fontSize: 15 }}>
                {" Tidak Termasuk Listrik"}
              </Text>

              <Text style={{ color: "black", marginLeft: 20, fontSize: 15 }}>
                {" Tidak ada min. bayar"}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#dbdbdb",
              height: 1,
              marginHorizontal: 20,
              marginTop: 5,
            }}
          />

          <View style={{ backgroundColor: "white", height: 230 }}>
            {/* LUAS KAMAR */}
            <View>
              <Text
                style={{
                  color: "black",
                  marginTop: 10,
                  marginLeft: 20,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Luas Kamar
              </Text>
              <View
                style={{ flexDirection: "row", marginTop: 10, marginLeft: 20 }}
              >
                <Text style={{ color: "black", marginLeft: 10, fontSize: 18 }}>
                  {luasKamar} m
                </Text>
              </View>
            </View>

            {/* FASILITAS KOST */}
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#0baa56",
                  marginTop: 20,
                  fontSize: 20,
                  marginRight: 50,
                }}
              >
                Fasilitas kost dan kamar
              </Text>
            </View>
            <View style={styles.button}>
              <Text style={{ color: "black", marginLeft: 10, fontSize: 18 }}>
                {fasilitas}
              </Text>
            </View>
          </View>

          {/* DESKRIPSI KOST */}
          <View style={{ backgroundColor: "white" }}>
            <View>
              <Text
                style={{
                  color: "black",
                  marginTop: 20,
                  marginLeft: 20,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Deskripsi Kost
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  marginHorizontal: 20,
                  flexWrap: "wrap",
                }}
              >
                <Text>{description}</Text>
              </View>
            </View>
          </View>

          {/* Pemilik Kost */}
          <View style={{ backgroundColor: "white" }}>
            <View
              style={{ backgroundColor: "white", height: 70, marginTop: 30 }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 11,
                  flex: 1,
                  marginHorizontal: 20,
                }}
              >
                *Data bisa berubah sewaktu-waktu,
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: "#f8f8f8",
                height: 100,
                marginTop: 0,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  backgroundColor: "transparent",
                  flex: 0.3,
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                {/* <Image source={require('../src/img/home.png')} style={{height: 80, width: 80}} /> */}
              </View>
              <View
                style={{
                  backgroundColor: "transparent",
                  flex: 0.7,
                  flexDirection: "column",
                }}
              >
                <View style={{ backgroundColor: "transparent", flex: 1 }}>
                  <Text style={{ color: "black", fontSize: 20, flex: 1 }}>
                    Pemilik Kost
                  </Text>
                  <Text style={{ color: "black", fontSize: 18, flex: 1 }}>
                    {pemilik}
                  </Text>
                  <Text style={{ color: "black", fontSize: 18, flex: 1 }}>
                    {kontakPemilik}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.button}></View>
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row" }}></View>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              title="book"
              color="#242dab"
              onPress={() =>
                this.props.navigation.navigate("BookKost", this.state)
              }
            ></Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="MAP"
              onPress={() =>
                this.props.navigation.navigate("Map", {
                  name: { name },
                })
              }
            />
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
  },
  image: {
    flexDirection: "column",
    width: 100,
    height: 100,
    marginTop: 20,
    alignItems: "center",
    alignContent: "center",
    resizeMode: "stretch",
  },
  container: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  buttonContainer: {
    width: 200,
    flex: 0,
    color: "red",
  },
  button: {
    marginTop: 20,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#123e75",
    fontSize: 30,
    opacity: 0.8,
    width: 35,
    height: 30,
    marginHorizontal: 13,
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
  button2: {
    width: 90,
    height: 55,
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
    fontSize: 10,
  },
});

{
  /* <View style={{ backgroundColor: 'white', height: 120 }}>
  <View style={{ flexDirection: 'row', marginTop: 10 }}>
    <Text style={{ color: '#4A92E6', marginLeft: 20, fontSize: 19 }}>
      {gender}
    </Text>
    <Text style={{ color: 'gray', marginLeft: 10 }}>
      {'\u2022'}
    </Text>
    <Text style={{ color: '#ec7e2f', marginLeft: 10, fontSize: 18 }}>
      12 Kamar
            </Text>
  </View>
  <View style={{ flexDirection: 'row', marginTop: 5 }}>
    <Text style={{ color: 'black', marginLeft: 20, fontSize: 21 }}>
      Kos Kakek Legend
    </Text>
  </View>
  <View style={{ flexDirection: 'row', marginTop: 5 }}>
    <Text style={{ color: 'black', marginLeft: 20, fontSize: 21 }}>
      Jakarta
    </Text>
  </View>
</View> */
}
