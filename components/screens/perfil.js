import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Perfil = () => {
    const [profileImage, setProfileImage] = useState(null); // Estado para la foto de perfil

    // Función para seleccionar una imagen
    const pickImage = async () => {
        // Solicitar permisos para acceder a la galería
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert("Permiso denegado", "Se necesita acceso a la galería para cambiar la foto de perfil.");
            return;
        }

        // Abrir la galería para seleccionar una imagen
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1], // Relación de aspecto cuadrada
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri); // Actualizar la foto de perfil
        }
    };

    return (
        <View style={styles.container}>
            {/* Foto de perfil */}
            <Pressable onPress={pickImage}>
                <Image
                    source={profileImage ? { uri: profileImage } : require("../../assets/default-profile.png")}
                    style={styles.profileImage}
                />
                <Text style={styles.changePhotoText}>Cambiar foto de perfil</Text>
            </Pressable>

            {/* Datos del usuario */}
            <View style={styles.userInfo}>
                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.value}>Juan Pérez</Text>

                <Text style={styles.label}>Correo:</Text>
                <Text style={styles.value}>juan.perez@example.com</Text>

                <Text style={styles.label}>Teléfono:</Text>
                <Text style={styles.value}>+123 456 789</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#FFC107",
        marginBottom: 10,
    },
    changePhotoText: {
        fontSize: 14,
        color: "#007BFF",
        textAlign: "center",
        marginBottom: 20,
    },
    userInfo: {
        marginTop: 20,
        width: "100%",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
        color: "#555",
        marginBottom: 15,
    },
});

export default Perfil;