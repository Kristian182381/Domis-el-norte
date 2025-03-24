import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./components/navegacion/drawerNavigator"; // Importa el DrawerNavigator

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator /> {/* Usa el DrawerNavigator como raíz */}
    </NavigationContainer>
  );
}
{/*
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/screens/login";
import Home from "./components/screens/home";
import Register from "./components/screens/register";
import Historial from "./components/screens/historial";
import Favoritos from "./components/screens/favoritos";
import Entregas from "./components/screens/entregas";
import Promociones from "./components/screens/promociones";
import DrawerNavigator from "./components/navegacion/drawerNavigator";

const Drawer = DrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FFC107", // Cambia el color de fondo del header
          },
          headerTintColor: "black", // Cambia el color del texto y los iconos
          headerTitleStyle: {
            fontWeight: "bold", // Opcional: cambia el estilo del título
          },
        }}
      >
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="historial" component={Historial} />
        <Stack.Screen name="favoritos" component={Favoritos} />
        <Stack.Screen name="entregas" component={Entregas} />
        <Stack.Screen name="promociones" component={Promociones} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

*/}