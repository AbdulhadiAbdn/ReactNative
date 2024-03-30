import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import { Image } from "expo-image";
import ContactSellerForm from "../components/forms/ContactSellerForm";

function ListingDetailsScreen({ route }) {
  const { item } = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View>
        <Image
          uri={item.images[0].url}
          preview={{ uri: item.images[0].thumbnailUrl }}
          tint="light"
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{item.title}</AppText>
          <AppText style={styles.subtitle}>${item.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              title="Abdulhadi Abdn"
              subtitle="5 listing"
              image={require("../assets/abdul.jpg")}
            />
          </View>
        </View>
        <ContactSellerForm listing={item} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 7,
    fontSize: 24,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
