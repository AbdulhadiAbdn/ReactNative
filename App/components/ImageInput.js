import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImageInput({ source, onChangeImage }) {
  const handlePress = () => {
    if (!source) pickImage();
    else
      Alert.alert("Delete Image", "Do you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(),
        },
        {
          text: "No",
        },
      ]);
  };

  const requestPermissions = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) return alert("You need to enable the permession");
  };
  useEffect(() => {
    requestPermissions();
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading the image ", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!source ? (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: source,
            }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 15,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginLeft: 10,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
