import {
  ImageBackground,
  View,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
const dimensions = Dimensions.get("window");
export default function ViewImage() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={styles.image}
      />

      <View style={styles.closeButton}>
        <MaterialCommunityIcons name="close" size={35} color="white" />
      </View>
      <View style={styles.deleteButton}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="white"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: dimensions.height * 0.07,
    left: dimensions.width * 0.05,
  },
  deleteButton: {
    position: "absolute",
    top: dimensions.height * 0.07,
    right: dimensions.width * 0.05,
  },
});
