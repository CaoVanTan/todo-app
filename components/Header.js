import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        height: 80,
        backgroundColor: "coral",
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        color: "#fff",
        fontWeight: "700",
    },
});
