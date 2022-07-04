import * as yup from 'yup';

export const createUserSchema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .required('Name is required'),
    lastname: yup
      .string()
      .required('Lastname is required'),
  }),
});