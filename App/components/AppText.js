import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

export default function AppText({ children, style, ...otherProperty }) {
  return (
    <Text style={[styles.text, style]} {...otherProperty}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        fontSize: 20,
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 18,
      },
    }),
  },
});
