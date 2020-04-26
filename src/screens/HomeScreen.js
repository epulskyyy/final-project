import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import HeaderIcon from '../components/HeaderIcon';
import BottomTab from '../components/BottomTab';
import Carousel from '../components/Carousel';
import logo from '../components/assetsImage/logo.png';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Home from '../components/Home';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { _loadSession } from '../reduxs/action/Auth';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');

class HomeScreen extends Component {
  render() {
    return (
      <>
        <HeaderIcon
          title="Ternak Kost"
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
              fontWeight: '700',
              backgroundColor: 'white',
            }}
          />
        </HeaderIcon>
        <ScrollView scrollEventThrottle={16}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              paddingHorizontal: 15,
              marginTop: 10,
            }}
          >
            What kind of room you needed?
          </Text>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button2}
              onPress={() =>
                this.props.navigation.navigate('ListKost', {
                  category: 'putra',
                })
              }
            >
              <MaterialCommunityIconsIcon
                name="human-male"
                style={styles.icon1}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.buttonText}>Kost Putra</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('ListKost', {
                  category: 'putri',
                })
              }
              style={styles.button2}
            >
              <MaterialCommunityIconsIcon
                name="human-female"
                style={styles.icon1}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.buttonText}>Kost Putri</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() =>
                this.props.navigation.navigate('ListKost', {
                  category: 'campur',
                })
              }
            >
              <MaterialCommunityIconsIcon
                name="human-male-female"
                style={styles.icon2}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.buttonText}>Kost Campur</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              paddingHorizontal: 15,
              marginTop: 20,
            }}
          >
            Introducing Ternak Kost
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              paddingHorizontal: 15,
              marginTop: 2,
            }}
          >
            A new selection of boarding house verified for quality and comfort
          </Text>
          <View style={styles.container}>
            <Carousel />
          </View>
          <View style={styles.category}>
            {/* <Text style={styles.categoryText}>Pilih Kategory</Text> */}
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}
            >
              Boarding homes around Jakarta
            </Text>
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              <Home
                width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                rating={4}
              />
              <Home
                width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                rating={4}
              />
              <Home
                width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                rating={4}
              />
              <Home
                width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                rating={4}
              />
            </View>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  category: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 20,
  },
  button2: {
    width: 85,
    height: 50,
    backgroundColor: 'transparent',
    borderColor: '#4194fa',
    borderRadius: 0,
    borderWidth: 0,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 10,
  },
  icon1: {
    backgroundColor: 'transparent',
    color: '#123e75',
    fontSize: 30,
    opacity: 0.8,
    width: 24,
    height: 30,
    marginHorizontal: 11,
  },
  icon2: {
    backgroundColor: 'transparent',
    color: '#123e75',
    fontSize: 30,
    opacity: 0.8,
    width: 26,
    height: 30,
    marginHorizontal: 10,
  },
});
