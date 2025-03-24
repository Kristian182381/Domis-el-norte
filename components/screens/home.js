import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Toolbar from "../common/toolbar";


const Home = ({navigation}) => {
    return (
        <View StyleSheet={StyleSheet.container}>
            <Text styles={StyleSheet.title}>Home</Text>
            <Toolbar navigation={navigation} currentScreen="home"/>
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

export default Home;