import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import { useHistory, Link } from 'react-router-dom';
import './index.css';
import schema from './formSchema';
import axiosWithAuth from '../../../state/AxiosWithAuth';
import { useForm } from './LoginUseForm';

const initialValues = {
  userName: '',
  password: '',
};

const initialDisabled = true;

const LoginContainer = () => {

  const [formValues, handleChange, resetForm, setValues, formErrors] = useForm(initialValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  let history = useHistory();

  const submit = () => {
    const userName = formValues.userName.trim();
    const password = formValues.password.trim();
    

    axiosWithAuth()
      .post()//fill out necessary info
      .then(res => {
        console.log('onSubmit res:', res);
        window.localStorage.setItem('token', res.data.access_token);
        history.push('/userpage');
      })
      .catch(err => console.log(err.response))
      .finally(resetForm());
  };

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
        <LoginForm handleChange = {handleChange} submit = {submit} errors = {formErrors} buttonDisabled = {disabled}/>
    </>
  );
};

export default LoginContainer;