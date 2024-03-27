import { Formik } from "formik";
import React from "react";

function AppForm({ children, ...otherProperty }) {
  return <Formik {...otherProperty}>{() => <>{children}</>}</Formik>;
}

export default AppForm;
