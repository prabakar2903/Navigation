import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Try from "./try";
import Pks from "./pks";
import Psk from "./psk";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pks" component={Pks} />
        <Stack.Screen name="Try" component={Try} />
        <Stack.Screen name="Psk" component={Psk} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}