import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormFeild,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import apiUsers from "../api/users";
import useAuth from "../auth/useAuth";
import apiAuth from "../api/auth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [error, setError] = useState();
  const [registerFaild, setRegisterFaild] = useState(false);
  const auth = useAuth();
  const loginApi = useApi(apiAuth.login);
  const registerApi = useApi(apiUsers.register);

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      setRegisterFaild(true);
      if (result.data) {
        setError(result.data.error);
        console.log(result);
      } else {
        setError("Unexpected error occured. retry later");
        console.log(result);
      }
      return;
    }
    setRegisterFaild(false);

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.login(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={loginApi.loading || registerApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={registerFaild} />
          <AppFormFeild
            name="name"
            label="Name"
            icon="account"
            autoCorrect={false}
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
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
