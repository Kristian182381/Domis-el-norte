import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const Favoritos = () => {
    const favoritos = [
        { id: "1", nombre: "Producto 1" },
        { id: "2", nombre: "Producto 2" },
        { id: "3", nombre: "Producto 3" },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favoritos</Text>
            <FlatList
                data={favoritos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.nombre}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#000",
        textAlign: "center",
    },
    item: {
        padding: 15,
        backgroundColor: "#f9f9f9",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        borderRadius: 5,
        marginBottom: 10,
    },
    itemText: {
        fontSize: 18,
        color: "#333",
    },
});

export default Favoritos;