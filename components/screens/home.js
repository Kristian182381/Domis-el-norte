import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import Toolbar from "../common/toolbar";

const Home = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");

    return (
        <View style={styles.container}>
            {/* Barra de búsqueda */}
            <TextInput
                style={styles.searchBar}
                placeholder="Buscar..."
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />
            <Text style={styles.title}>Home</Text>
            <Toolbar navigation={navigation} currentScreen="home" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 20,
    },
    searchBar: {
        width: "90%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 20,
    },
});

export default Home;