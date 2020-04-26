import React, { Component } from "react";
import {
    Card,
    View,
} from "native-base";
import { Text, StyleSheet, Button } from "react-native";
import HeaderIcon from "../components/HeaderIcon";
import { TextInput } from "react-native-paper";

export default class ListKostScreen extends Component {
    render() {
        return (
            <>
                <HeaderIcon
                    title="Booking"
                    icon="arrow-back"
                    onPress={() => this.props.navigation.navigate("DetailKost", this.state)}
                />
                <Text style={styles.text}
                >Silahkan isi data dibawah ini</Text>
                <Card>
                    <Text style={styles.input}>Tanggal Masuk Kos</Text>
                    <TextInput></TextInput>
                </Card>
                <Card>
                    <Text style={styles.input}>Hitungan Sewa</Text>
                    <TextInput></TextInput>
                </Card>
                <Card>
                    <Text style={styles.input}>Profile Pribadi (optional)</Text>
                    <TextInput></TextInput>
                </Card>
                <Card>
                    <Text style={styles.input}>Metode Pembayaran</Text>
                    <TextInput></TextInput>
                </Card>
                <Card>
                    <View>
                        <Button
                            title="booking"
                            onPress={() =>
                                this.props.navigation.navigate("BookKost", this.state)
                            }
                        ></Button>
                    </View>
                </Card>
            </>
        );
    }
}

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
})