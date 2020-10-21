import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../../state/AxiosWithAuth';
import ProjectCard from '../../Common/ProjectCard';

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
        {userProjects.map(project => (
          <ProjectCard id = {project.project_id} project = {project} updateUserProjects = {setUserProjects}/>
        ))}
      </Container>
    );
  };
  
  export default UserPage();

  // {userProjects.map(project => (
  //   <ul key={project.projectId} onClick={() => editproject(project)}>
  //     <span>
  //       <span
  //         onClick={e => {
  //           e.stopPropagation();
  //           deleteproject(project.projectId);
  //         }}
  //       >
  //         delete project
  //       </span>{' '}
  //       {project.name}
  //     </span>
  //   </ul>
  // ))}