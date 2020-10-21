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
  userName: '',
  primaryEmail: '',
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
    debugger;
    axios
      .post(
        // insert post link,
        newUser
      )
      .then(res => {
        localStorage.setItem('token', res.token);
        history.push('/userpage');
        resetForm();
      })
      .catch(err => {
        console.log(err);
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
    const newUser = {
      userName: formValues.userName.trim(),
      primaryEmail: formValues.primaryEmail.trim(),
      password: formValues.password.trim(),
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