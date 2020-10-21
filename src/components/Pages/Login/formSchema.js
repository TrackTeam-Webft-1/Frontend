import * as yup from 'yup';

export default yup.object().shape({
    userName: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password if Required')
      .min(6),
  });