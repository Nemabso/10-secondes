import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./src/pages/Welcome";

import Rules from "./src/pages/Rules";

import Registering from "./src/pages/Registering";
import Warning from "./src/pages/Warning";
import { store, persistor } from "./store";
import Rappel from "./src/pages/Rappel";
import Question from "./src/pages/Question";
import Gestion from "./src/pages/Gestion";
import Categories from "./src/pages/Categories";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Question"
              component={Question}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rules"
              component={Rules}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registering"
              component={Registering}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Warning"
              component={Warning}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Categories"
              component={Categories}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rappel"
              component={Rappel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Gestion"
              component={Gestion}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
