import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={{ padding: 20 }}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

export default PickerItem;
