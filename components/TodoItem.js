import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function TodoItem({ item, handlePress }) {
    return (
        <TouchableOpacity onLongPress={() => handlePress(item.key)}>
            <View style={styles.item}>
                <Text>{item.text}</Text>
                <Ionicons
                    style={styles.icon}
                    name="close"
                    size={24}
                    color="black"
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginVertical: 8,
        borderColor: "#333",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {},
});

export default TodoItem;
