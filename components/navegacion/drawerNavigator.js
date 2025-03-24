import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/home";
import Historial from "../screens/historial";
import Favoritos from "../screens/favoritos";
import Entregas from "../screens/entregas";
import Promociones from "../screens/promociones";
import Perfil from "../screens/perfil";
import Configuraciones from "../screens/configuraciones";
import Ayuda from "../screens/ayuda";
import Login from "../screens/login";
import Register from "../screens/register";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Stack Navigator para las pantallas del Toolbar
function ToolbarStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false, // Deshabilita el header del Stack.Navigator
            }}
        >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="historial" component={Historial} />
            <Stack.Screen name="favoritos" component={Favoritos} />
            <Stack.Screen name="entregas" component={Entregas} />
            <Stack.Screen name="promociones" component={Promociones} />
        </Stack.Navigator>
    );
}

// Drawer Navigator para el menú hamburguesa
export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                headerStyle: {
                    backgroundColor: "#FFC107",
                },
                headerTintColor: "black",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                drawerStyle: {
                    backgroundColor: "#FFF",
                },
                drawerActiveTintColor: "#FFC107",
                drawerInactiveTintColor: "black",
                headerTitle: route.name, // Muestra el nombre de la pantalla actual en el header
            })}
        >
            {/* Pantallas del Toolbar */}
            <Drawer.Screen
                name="Delivery App"
                component={ToolbarStack} // Usa el Stack Navigator para las pantallas del Toolbar
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

            {/* Pantallas del Drawer */}
            <Drawer.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Configuraciones"
                component={Configuraciones}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Ayuda"
                component={Ayuda}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="help-circle" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Cerrar sesión"
                component={Login} // Redirige al Login al cerrar sesión
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="log-out" size={size} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}