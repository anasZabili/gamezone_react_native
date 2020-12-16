import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetail";

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
          name="Home"
          component={Home}
          options={{ title: "Gamezone" }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{ title: "Review Details" }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
