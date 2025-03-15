import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import Button from '../common/button'; // Importa el componente de botón

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        /*
        if (email === '' || password === '') {
            setError('Both fields are required');
            return;
        }
            */

        // Autenticación con Firebase
        /*
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Autenticación exitosa
                const user = userCredential.user;
                console.log('User logged in:', user);
                */
                navigation.navigate('home');
                /*
            })
                
            .catch((error) => {
                setError(error.message);
            });
            */
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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
            <Button title="Login" onPress={handleLogin} style={styles.button} />
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
                <Text style={styles.registerLink}>Don't have an account? Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        color: '#ff8c00',
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ff8c00',
        borderRadius: 5,
    },
    error: {
        color: 'red',
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#ff8c00',
        marginBottom: 12,
    },
    registerLink: {
        marginTop: 16,
        color: '#ff8c00',
        textDecorationLine: 'underline',
    },
});

export default Login;