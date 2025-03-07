import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, realtimeDb } from "../../firebaseConfig";
import { ref, set } from "firebase/database";
import Button from "../common/button"; // Importa el componente de botón

const Register = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = () => {
        // Validar los campos de entrada
        if (username === "" || email === "" || password === "") {
            setError("All fields are required");
            return;
        }

        // Registrar usuario con Firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Registro exitoso
                const user = userCredential.user;
                console.log("User registered:", user);

                // Guardar datos del usuario en Realtime Database
                set(ref(realtimeDb, "users/" + user.uid), {
                    username: username,
                    email: email,
                });

                navigation.navigate("login");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Button title="Register" onPress={handleRegister} style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        color: "#ff8c00",
    },
    input: {
        width: "100%",
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#ff8c00",
        borderRadius: 5,
    },
    error: {
        color: "red",
        marginBottom: 12,
    },
    button: {
        backgroundColor: "#ff8c00",
        marginBottom: 12,
    },
});

export default Register;
