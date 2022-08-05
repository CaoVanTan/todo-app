import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function AddTodo({ handleSubmit }) {
    const [todo, setTodo] = useState("");

    const handleChange = (value) => {
        setTodo(value);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter todo..."
                defaultValue={todo}
                onChangeText={handleChange}
            />

            <Button
                title="Add Todo"
                color={"coral"}
                onPress={() => handleSubmit(todo)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 16,
        borderBottomColor: "#333",
        borderBottomWidth: 2,
        borderStyle: "solid",
    },
});

export default AddTodo;
