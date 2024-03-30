import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { Image } from "expo-image";

function Card({ title, subtitle, imageURL, thumbnailURL }) {
  return (
    <View style={styles.card}>
      <Image
        uri={imageURL}
        preview={{ uri: thumbnailURL }}
        tint="light"
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
