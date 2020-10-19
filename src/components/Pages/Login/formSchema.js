import * as yup from 'yup';

export default yup.object().shape({
    primaryEmail: yup
      .string()
      .email()
      .required('Email is required'),
    password: yup
      .string()
      .required('Password if Required')
      .min(6),
  });