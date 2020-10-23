import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';
import schema from './formSchema';
import axios from 'axios';
import axiosWithAuth from '../../../state/AxiosWithAuth';
import { useForm } from './LoginUseForm';

//import { setfirstname } from '../../../state/actions';

const initialValues = {
  firstname: '',
  lastname: '',
  password: '',
};

const initialDisabled = true;

const LoginContainer = () => {

  const [formValues, handleChange, resetForm, setValues, formErrors] = useForm(initialValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  let history = useHistory();

  const submit = () => {
    const firstname = formValues.firstname.trim();
    const lastname = formValues.lastname.trim();
    const password = formValues.password.trim();

    const newUser = {
      firstname: firstname, 
      lastname: lastname, 
      password: password
    }
    

    axios.post('https://funding-platform-bw.herokuapp.com/api/auth/login', newUser)//fill out necessary info
      .then((res) => {
        console.log('login onSubmit res:', res);
        window.localStorage.setItem('token', res.data.token);
        window.localStorage.setItem('user_id', res.data.user.user_id)
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

// const mapStateToProps = (state) => {
//   return {
//     firstname: state.firstname
//   }
// }

//export default connect(mapStateToProps, { setfirstname })(LoginContainer);

export default LoginContainer;