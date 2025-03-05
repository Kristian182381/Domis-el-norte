// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0QgqRpQIvi9nWi7FjP1fKXPB8En6--VM",
    authDomain: "domis-el-norte.firebaseapp.com",
    projectId: "domis-el-norte",
    storageBucket: "domis-el-norte.firebasestorage.app",
    messagingSenderId: "1040351147085",
    appId: "1:1040351147085:web:38bbd31fc9b20414f69804",
    measurementId: "G-6WZ0Q6HVMT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
export { auth };
