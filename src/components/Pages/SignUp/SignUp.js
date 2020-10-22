import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import SignUpForm from './SignUpForm';
//import Time from './timeInZone';
import schema from './formSchema';
import axios from 'axios';
import { useForm } from './SignUpUseForm';

const initialValues = {
  //text input
  username: '',
  email: '',
  password: '',
};

const initialDisabled = true;

const SignUpContainer = () => {
  //states
  const [formValues, handleChanges, resetForm, setValues, formErrors] = useForm(
    initialValues
  );
  const [disabled, setDisabled] = useState(initialDisabled);


  //Helpers
  let history = useHistory();

  const postNewUser = newUser => {
    axios
      .post(
        'https://virtual-reality-funding.herokuapp.com/api/auth/register',
        newUser
      )
      .then(res => {
        console.log('registered new user')
        localStorage.setItem('token', res.token);
        history.push('/userpage');
        resetForm();
      })
      .catch(err => {
        console.log('sign up error: ', err);
      });
  };

  //side-effects

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const submitValues = evt => {
    evt.preventDefault();
    const mainID = Math.random()
    const newUser = {
      id: mainID,
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      user_id: mainID
    };
    postNewUser(newUser);
    resetForm(initialValues);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <SignUpForm
          values={formValues}
          change={handleChanges}
          submit={submitValues}
          formErrors={formErrors}
          disabled={disabled}
        />
        {/* <Time /> */}
      </Container>
    </div>
  );
};

export default SignUpContainer;