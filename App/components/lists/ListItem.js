import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import colors from "../../config/colors";

function ListItem({
  title,
  subtitle,
  image,
  renderRightActions,
  iconComponents,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light}>
          <View style={styles.container}>
            {image && <Image style={styles.image} source={image} />}
            {iconComponents}
            <View style={{ marginLeft: 10, flex: 1 }}>
              <AppText style={styles.name} numberOfLines={1}>
                {title}
              </AppText>
              {subtitle && (
                <AppText style={styles.listing} numberOfLines={1}>
                  {subtitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              color={colors.medium}
              size={20}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    fontWeight: "500",
  },
  listing: {
    color: colors.medium,
  },
});

export default ListItem;
