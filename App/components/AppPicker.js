import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles.js";
import AppText from "./AppText.js";
import Screen from "./Screen.js";
import PickerItem from "./PickerItem.js";

function AppPicker({
  icon,
  label,
  items,
  numberOfColumns = 1,
  selectedItem = "",
  onSelectItem,
  PickerItemComponent = PickerItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
          )}

          {selectedItem ? (
            <AppText style={[defaultStyles.text, { flex: 1 }]}>
              {selectedItem}
            </AppText>
          ) : (
            <AppText
              style={[defaultStyles.text, { flex: 1, color: colors.medium }]}
            >
              {label}
            </AppText>
          )}

          <MaterialCommunityIcons name="chevron-down" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  onSelectItem(item);
                  setModalVisible(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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

export default AppPicker;
