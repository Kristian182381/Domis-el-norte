import { initializeApp } from "firebase/app";
import {
    getAuth,
    initializeAuth,
    getReactNativePersistence,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0QgqRpQIvi9nWi7FjP1fKXPB8En6--VM",
    authDomain: "domis-el-norte.firebaseapp.com",
    projectId: "domis-el-norte",
    storageBucket: "domis-el-norte.firebasestorage.app",
    messagingSenderId: "1040351147085",
    appId: "1:1040351147085:web:38bbd31fc9b20414f69804",
    measurementId: "G-6WZ0Q6HVMT",
    databaseURL: "https://domis-el-norte-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});
const realtimeDb = getDatabase(app);

export { auth, realtimeDb };
