import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from '../../Common/ProjectCard'

import { fetchProjects } from '../../../state/actions';

function CurrentProjects(props) {

  //const initialProject = [];
  //const [projects, setProjects] = useState(initialProject);

  // const getProjects = () => {
  //   console.log('running getProjects');

  //   axios.get('')//Insert get link
  //     .then(projects => {
  //       console.log('projects', projects.data);
  //       setProjects(projects.data);
  //     })
  //     .catch(err => console.log(err));
  // };

  useEffect(() => {
    props.fetchProjects();
  }, []);

  return (
    <div>
      <h3>This is CurrentProjects</h3>
      {props.projects.map(project => (
          <ProjectCard id = {project.project_id} project = {project} />
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, { fetchProjects })(CurrentProjects);