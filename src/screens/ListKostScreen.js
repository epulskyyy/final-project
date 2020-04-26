import React, { Component } from "react";
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  View,
  Right,
  Content,
  Button,
  Image,
} from "native-base";
import { Text, StyleSheet } from "react-native";
import HeaderIcon from "../components/HeaderIcon";
import { Title } from "react-native-paper";
import {
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Axios from "axios";
import { fetchKostdata } from "../reduxs/action/Kost";
import { connect } from "react-redux";

class ListKostScreen extends Component {
  componentDidMount() {
    const { category } = this.props.route.params;
    this.props.fetchKostdata(category);
    console.log("masuk");
    // console.log(result.data.category);
  }

  render() {
    const list = this.props.kost.listKost.map((item) => {
      return (
        <ScrollView>
          <View
            elevation={20}
            style={{
              marginHorizontal: 20,
              backgroundColor: "white",
              height: 370,
              marginTop: 20,
              borderRadius: 10,
              flexDirection: "row",
            }}
          >
            <Left>
              <Thumbnail
                source={item.imageUrl}
                style={{
                  width: 353,
                  height: 500,
                  resizeMode: "cover",
                  flex: 1,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              />
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text style={{ color: "#4A92E6", marginLeft: 25 }}>
                  {item.category}
                </Text>
                <Text style={{ color: "gray", marginLeft: 10 }}>
                  {"\u2022"}
                </Text>
                <Text style={{ color: "#1BAA56", marginLeft: 10 }}>
                  {item.jumlahKamar}
                </Text>
                <Text style={{ color: "gray", marginLeft: 10 }}>
                  {"\u2022"}
                </Text>
                <Text style={{ color: "#3B445B", marginLeft: 10 }}>
                  {item.address}
                </Text>
              </View>

              <View
                style={{
                  alignItems: "flex-start",
                  marginLeft: 10,
                  top: -4,
                }}
              >
                <Title>{item.name}</Title>
              </View>
            </Left>
            <Right>
              <View
                style={{
                  alignItems: "flex-end",
                  top: 165,
                  marginRight: 10,
                }}
              >
                <Text>{item.price}</Text>
              </View>
            </Right>
          </View>
        </ScrollView>
      );
    });
    return (
      <>
        <HeaderIcon
          title="List"
          icon="arrow-back"
          onPress={() => this.props.navigation.navigate("Home", this.state)}
        />
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              paddingHorizontal: 15,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            Select your most desirable room
          </Text>
          <View style={{ backgroundColor: "#FFFF", height: 410 }}>
            <TouchableOpacity
              button
              onPress={() =>
                this.props.navigation.navigate("DetailKost", this.state)
              }
            >
              {list}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textsemibold: {
    fontFamily: "Lato-Semibold",
  },

  textbold: {
    fontFamily: "Lato-Bold",
  },

  textabu: {
    fontFamily: "Lato-Regular",
    color: "#727272",
  },

  textcheckboxijo: {
    fontFamily: "Lato-Regular",
    color: "#0baa56",
    justifyContent: "center",
    alignItems: "center",
    textDecorationLine: "underline",
  },

  textcheckbox: {
    fontFamily: "Lato-Regular",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    kost: state.kost,
  };
};

export default connect(mapStateToProps, { fetchKostdata })(ListKostScreen);
