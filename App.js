import React, { useState } from "react";
import {
    FlatList,
    StyleSheet,
    View,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import Sandbox from "./components/Sandbox";

export default function App() {
    const [todos, setTodos] = useState([
        { text: "Đi chơi", key: 1 },
        { text: "Học bài", key: 2 },
        { text: "Làm bài tập", key: 3 },
        { text: "Ăn cơm", key: 4 },
    ]);

    const handlePress = (key) => {
        setTodos((prev) => prev.filter((todo) => todo.key != key));
    };

    const handleSubmit = (text) => {
        if (text.trim().length > 3) {
            setTodos((prev) => [
                ...prev,
                { text: text.trim(), key: Math.random().toString() },
            ]);
        } else {
            Alert.alert("Error message!", "Todo must be over 3 characters!");
        }
    };

    return (
        // <Sandbox />
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo handleSubmit={handleSubmit} />
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem
                                    item={item}
                                    handlePress={handlePress}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        padding: 24,
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
});
