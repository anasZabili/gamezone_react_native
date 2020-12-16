import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/Home";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    // <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // couleur du text
          // headerTintColor: "back",
          headerStyle: {
            backgroundColor: "grey",
            height: 70,
          },
        }}
      >
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "About Gamezone" }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
