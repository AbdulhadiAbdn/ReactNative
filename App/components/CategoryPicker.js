import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

function CategoryPicker({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={item.icon} backgroundColor={item.backgroundColor} size={70} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: "33%",
    marginVertical: 10,
    alignItems: "center",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPicker;
