import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 40,
        backgroundColor: "#ddd",
    },
    boxOne: {
        flex: 1,
        backgroundColor: "orange",
        padding: 16,
        color: "#fff",
    },
    boxTwo: {
        flex: 2,
        backgroundColor: "green",
        padding: 16,
        color: "#fff",
    },
    boxThree: {
        flex: 3,
        backgroundColor: "violet",
        padding: 16,
        color: "#fff",
    },
    boxFour: {
        flex: 4,
        backgroundColor: "red",
        padding: 16,
        color: "#fff",
    },
});

export default Sandbox;
