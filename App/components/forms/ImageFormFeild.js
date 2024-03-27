import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

function ImageFormFeild({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const imageUris = values[name];

  const handleDelete = (uri) =>
    setFieldValue(
      name,
      imageUris.filter((image) => image !== uri)
    );
  const handleAdd = (uri) => setFieldValue(name, [...imageUris, uri]);

  return (
    <>
      <ImageInputList
        ImageUris={imageUris}
        onAdd={handleAdd}
        onDelete={handleDelete}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ImageFormFeild;
