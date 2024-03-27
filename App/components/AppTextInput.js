import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles.js";

function AppTextInput({ icon, label, ...otherProperty }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        placeholder={label}
        style={[defaultStyles.text, { flex: 1 }]}
        {...otherProperty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.light,
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
    color: colors.medium,
  },
});

export default AppTextInput;
