import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Perfil = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <Text style={styles.text}>Nombre: Juan Pérez</Text>
            <Text style={styles.text}>Correo: juan.perez@example.com</Text>
            <Text style={styles.text}>Teléfono: +123 456 789</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#000",
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: "#333",
    },
});

export default Perfil;