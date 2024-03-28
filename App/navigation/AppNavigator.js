import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import TabButton from "../components/TabButton";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  useNotifications();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TabButton onPress={() => navigation.navigate("Post")} />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
