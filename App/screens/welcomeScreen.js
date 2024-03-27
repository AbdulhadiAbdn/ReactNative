import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppButton from "../components/AppButton";

const dimensions = Dimensions.get("window");

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={15}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.text}>Sell what you don't need</Text>
      </View>
      <View style={styles.container}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate({ name: "Login" })}
          color="primary"
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate({ name: "Register" })}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingEnd: 10,
    paddingStart: 10,
  },
  background: {
    flex: 1,
    paddingTop: dimensions.height * 0.1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    padding: 10,
  },
});
