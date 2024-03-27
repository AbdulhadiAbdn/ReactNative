import "core-js/stable/atob";
import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import apiAuth from "../api/auth";
import useAuth from "../auth/useAuth";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormFeild,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const { login } = useAuth();
  const [loginFaild, setLoginFaild] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await apiAuth.login(email, password);
    if (!result.ok) return setLoginFaild(true);

    setLoginFaild(false);
    login(result.data);
  };
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password"
          visible={loginFaild}
        />
        <AppFormFeild
          name="email"
          label="Email"
          icon="email"
          autoCapitalize={"none"}
          keyboardType="email-address"
          autoCorrect={false}
          textContentType="emailAddress"
        />
        <AppFormFeild
          name="password"
          label="Password"
          icon="lock"
          autoCapitalize={"none"}
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
