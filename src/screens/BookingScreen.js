import React, { Component } from "react";
import { Card, View } from "native-base";
import { Text, StyleSheet, Button } from "react-native";
import HeaderIcon from "../components/HeaderIcon";
import { TextInput } from "react-native-paper";
import DatePicker from "react-native-datepicker";
import { _booking } from "../reduxs/action/Booking";
import { connect } from "react-redux";

class BookingScreen extends Component {
  state = {
    tanggalMasuk: "",
    durasi: "",
    kamarId: "",
    pemilikName: "",
    pencariName: "",
  };

  booking = () => {
    const {
      tanggalMasuk,
      durasi,
      kamarId,
      pemilikName,
      pencariName,
    } = this.state;

    const navigate = this.props.navigation;
    this.props._booking(
      { tanggalMasuk, durasi, kamarId, pemilikName, pencariName },
      navigate
    );
    console.log(this.state);
  };

  render() {
    return (
      <>
        <HeaderIcon
          title="Booking"
          icon="arrow-back"
          onPress={() =>
            this.props.navigation.navigate("DetailKost", this.state)
          }
        />
        <Text style={styles.text}>Silahkan isi data dibawah ini</Text>
        <Card>
          <Text style={styles.input}>Pilih Tanggal Masuk</Text>

          <DatePicker
            style={{ width: 200 }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2020-04-26"
            maxDate="2025-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              this.setState({ date: date });
            }}
          />
        </Card>
        <Card>
          <Text style={styles.input}>Durasi Sewa (/Bulan)</Text>
          <TextInput
            onChangeText={(durasi) => this.setState({ durasi })}
          ></TextInput>
        </Card>

        <Button title="Submit" onPress={this.booking} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    booking: state.booking,
  };
};

export default connect(mapStateToProps, { _booking })(BookingScreen);

const styles = StyleSheet.create({
  text: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
  },
});
