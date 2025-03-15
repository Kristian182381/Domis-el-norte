import React from "react";
import { StyleSheet, Text, View } from "react-native";

//importaciones de iconos 
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <View style={styles.iconHome}>
                <Ionicons name="home" size={35} color={"#000"}/>
            </View>
            
            <View style={styles.iconsLeft}>
                <FontAwesome5 name="history" size={30} color="black" />
                <MaterialIcons name="favorite" size={30} color="black" />
            </View>
            
            <View style={styles.iconsRight}>
                <MaterialIcons name="delivery-dining" size={33} color="black"/>
                <Fontisto name="shopping-sale" size={30} color="black" />
            </View>

            <View style={styles.toolbar}>
                //toolbar (barra de herramientas inferior)
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    //estilos del contenedor principal
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    //estilos del titulo (home)
    title: {
        fontSize: 24,
        color: "#000",
        marginBottom: 'auto',
    },
    //estilos de los iconos y del toolbar
    iconHome:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 21,
        zIndex: 1, //ubica el elemento por encima de los demas
    },
    iconsLeft: {
        position: 'absolute',
        bottom: 18,
        left: 20,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
    },

    iconsRight: {
        position: 'absolute',
        bottom: 18,
        right: 20,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
    },

    toolbar: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60,
        backgroundColor: '#C70039',
        borderTopWidth: 1,
        borderTopColor: '#e7e7e7',
    },
});

export default Home;