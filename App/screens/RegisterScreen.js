import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import { AppForm, AppFormFeild, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
