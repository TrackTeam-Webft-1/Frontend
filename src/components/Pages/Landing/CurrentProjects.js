import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

function CurrentProjects() {

  const initialProject = [];
  const [projects, setProjects] = useState(initialProject);

  const getProjects = () => {
    console.log('running getProjects');

    axios.get('')//Insert get link
      .then(projects => {
        console.log('projects', projects.data);
        setProjects(projects.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <h3>This is CurrentProjects</h3>
    </div>
  );
}

export default CurrentProjects;