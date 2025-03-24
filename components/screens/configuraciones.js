import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


const Configuraciones = () => {
    return (
        <View StyleSheet={StyleSheet.container}>
            <Text styles={StyleSheet.title}>Configuraciones</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgrounColor: "#fff",
        alignItems: "center",
    }
});

export default Configuraciones;