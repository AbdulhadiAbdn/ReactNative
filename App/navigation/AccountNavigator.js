import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

function AccountNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountPage"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="My Account"
        component={MessagesScreen}
        options={{ headerTitle: "My Messages" }}
      />
    </Stack.Navigator>
  );
}

export default AccountNavigator;
