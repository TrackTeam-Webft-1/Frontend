import * as yup from 'yup';

export default yup.object().shape({
    firstname: yup
      .string()
      .required('firstname is required'),
    lastname: yup
      .string()
      .required('lastname is required'),
    password: yup
      .string()
      .required('Password is Required')
      .min(6),
  });