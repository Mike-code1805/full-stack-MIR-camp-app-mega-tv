import * as Yup from "yup";

const name = Yup.string().required("El nombre no puede ser vacío");

const lastname = Yup.string().required("El apellido no puede ser vacío");

const address = Yup.string().required("Es necesario una dirección");

const nroApart = Yup.string().required("Es necesario un número de apartamento");

const plan = Yup.string().required("Es necesario escoger un plan");

const email = Yup.string()
  .email("Ingrese un correo válido.")
  .required("El correo no puede ser vacío");

const phone = Yup.string().required("Es necesario un número telefónico");

export const validator = {
  name,
  lastname,
  address,
  nroApart,
  plan,
  email,
  phone
};
