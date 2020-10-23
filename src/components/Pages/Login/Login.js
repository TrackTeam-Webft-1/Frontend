import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';
import schema from './formSchema';
import axiosWithAuth from '../../../state/AxiosWithAuth';
import { useForm } from './LoginUseForm';

import { setUsername } from '../../../state/actions';

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

    const newUser = {
      username: userName, 
      password: password
    }
    

    axiosWithAuth()
      .post('/api/auth/login', newUser)//fill out necessary info
      .then(res => {
        console.log('onSubmit res:', res);
        window.localStorage.setItem('token', res.data.token);
        history.push('/userpage');
      })
      .catch(err => console.log('login error: ', err.response))
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

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps, { setUsername })(LoginContainer);