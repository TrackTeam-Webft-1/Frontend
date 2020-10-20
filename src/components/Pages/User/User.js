import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../../state/AxiosWithAuth';

import Container from '@material-ui/core/Container';

const UserPage = ({ getData }) => {
    const [userProjects, setUserProjects] = useState([]);
  
    const getUserItems = () => {
      axiosWithAuth()
        .get('') //fill with link
        .then(res => {
          setUserProjects(); //fill with proper data
        })
        .catch(err => console.log(err));
    };
  
    //Create a useEffect calling an action to retrive all data
    // useEffect(() => {
    //   getData();
    // }, [getData]);
  
    useEffect(() => {
      getUserItems();
    }, [userProjects]);
  
    return (
      <Container maxWidth="md">
        <h1>Your projects:</h1>
      </Container>
    );
  };
  
  export default UserPage();