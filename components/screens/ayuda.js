import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


const Ayuda = () => {
    return (
        <View StyleSheet={StyleSheet.container}>
            <Text styles={StyleSheet.title}>Ayuda</Text>
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

export default Ayuda;