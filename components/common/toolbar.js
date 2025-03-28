import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { MaterialIcons, FontAwesome5, Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";


const Toolbar = ({ navigation, currentScreen }) => {
    return (

        <View style={styles.toolbar}>
            <View style={styles.iconHome}>
                <Pressable
                    onPress={() => {
                        if (currentScreen !== "home") {
                            navigation.navigate("home");
                        }
                    }}
                >
                    <Ionicons name="home" size={35} color={"#000"} />
                </Pressable>
            </View>

            <View style={styles.iconsLeft}>
                <Pressable onPress={() => navigation.navigate("historial")}>
                    <FontAwesome5 name="history" size={30} color="black" />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("favoritos")}>
                    <MaterialIcons name="favorite" size={30} color="black" />
                </Pressable>
            </View>

            <View style={styles.iconsRight}>
                <Pressable onPress={() => navigation.navigate("entregas")}>
                    <MaterialIcons name="delivery-dining" size={33} color="black" />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("promociones")}>
                    <Fontisto name="shopping-sale" size={30} color="black" />
                </Pressable>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    toolbar: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 60,
        backgroundColor: "#FFC107",
        borderTopWidth: 1,
        borderTopColor: "#e7e7e7",
    },
    iconHome: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 21,
        zIndex: 1, //ubica el elemento por encima de los demas
    },
    iconsLeft: {
        position: "absolute",
        bottom: 18,
        left: 20,
        zIndex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: 100,
    },
    iconsRight: {
        position: "absolute",
        bottom: 18,
        right: 20,
        zIndex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: 100,
    },
});

export default Toolbar;







