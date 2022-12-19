import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlaceListScreen from "../screens/PlaceListScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import { COLORS } from "../constants";

const PlaceStack = createNativeStackNavigator();

const PlaceNavigator = () => {
  return (
    <NavigationContainer>
      <PlaceStack.Navigator
        initialRouteName="Direcciones"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? COLORS.DARK_SIENNA : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : COLORS.DARK_SIENNA,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <PlaceStack.Screen
          name="Direcciones"
          component={PlaceListScreen}
          options={({ navigation }) => ({
            title: "Direcciones",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Nuevo")}>
                <Ionicons
                  name="md-add"
                  color={
                    Platform.OS === "android" ? "white" : COLORS.DARK_SIENNA
                  }
                  size={23}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <PlaceStack.Screen
          name="Detalle"
          component={PlaceDetailScreen}
          options={{ title: "Detalle direccion" }}
        />
        <PlaceStack.Screen
          name="Nuevo"
          component={NewPlaceScreen}
          options={{ title: "Nueva direccion" }}
        />
        <PlaceStack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Mapa" }}
        />
      </PlaceStack.Navigator>
    </NavigationContainer>
  );
};

export default PlaceNavigator;
