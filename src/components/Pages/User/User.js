import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../../state/AxiosWithAuth';
import ProjectCard from '../../Common/ProjectCard';
import AddProjectForm from '../../Common/addProject/AddProjectForm';

import { connect } from 'react-redux';
import { fetchProjects } from '../../../state/actions';

import Container from '@material-ui/core/Container';

const UserPage = (props) => {
    const [userProjects, setUserProjects] = useState([]);
  
    const getUserItems = () => {
      // axiosWithAuth()
      //   .get('') //fill with link
      //   .then(res => {
      //     setUserProjects(); //fill with proper data
      //   })
      //   .catch(err => console.log(err));
      
      //call action object to get all projects
      // filteroutby client id/email
      // props.fetchProjects()
      console.log('all projects in project state on the user page', props.projects);
      
      //const result = words.filter(word => word.length > 6);
      
      const newUserArray = props.projects.filter(project => project.username === props.username )
      
      // setUserProjects(newUserArray);
      setUserProjects(newUserArray);
    };
  
    // setUserProjects(newUserArray);

    //Create a useEffect calling an action to retrive all data
    // useEffect(() => {
    //   getData();
    // }, [getData]);
  
    // useEffect(() => {
    //   getUserItems();
    // }, [props.projects]);

    useEffect(() => {
      getUserItems()
    }, [getUserItems()]);
  
    return (
      <Container maxWidth="md">
        <h1>Your projects:</h1>
        {userProjects.map(project => (
          <ProjectCard id = {project.project_id} project = {project} updateUserProjects = {setUserProjects}/>
        ))}
        <AddProjectForm />
      </Container>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      projects: state.projects
    }
  }

  export default connect(mapStateToProps, {})(UserPage);

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