/* eslint no-param-reassign: ["error", { "props": false }] */
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { validator } from "../components/utils/validators";

const getValidationSchema = (keys = []) =>
  keys.reduce((schema, key) => {
    schema[key] = validator[key];
    return schema;
  }, {});

export const useCustomFormik = (values = {}, callback = async () => {}) => {
  const [errors] = useState({});
  const keys = Object.keys(values);

  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object(getValidationSchema(keys)),
    onSubmit: async (args) => {
      await callback(args);
    }
  });

  const handleChange = (e) => {
    formik.handleChange(e);
    errors[e.target.name] = "";
  };

  const customFormik = {};
  customFormik.values = formik.values;
  customFormik.handleSubmit = formik.handleSubmit;
  customFormik.handleChange = handleChange;
  customFormik.errors = keys.reduce((customErrors, key) => {
    customErrors[key] = formik.errors[key] || errors[key];
    return customErrors;
  }, {});

  return customFormik;
};
