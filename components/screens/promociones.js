import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Toolbar from "../common/toolbar";


const Promociones = ({navigation}) => {
    return (
        <View StyleSheet={StyleSheet.container}>
            <Text styles={StyleSheet.title}>Promociones</Text>
            <Toolbar navigation={navigation} currentScreen="promociones"/>
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

export default Promociones;