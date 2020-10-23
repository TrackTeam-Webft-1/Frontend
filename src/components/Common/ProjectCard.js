import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axiosWithAuth from '../../state/AxiosWithAuth';
import {editProject, deleteProject} from '../../state/actions';

const initialEditing = false;

const useStyles = makeStyles({
  root: {
    width: 250, //200,
  },
  media: {
    //here for if/when I get images to upload!
    // height: 140,
  },
});

//function ProjectCard({ project, editProject, deleteProject })
function ProjectCard(props) {
  const { project, editProject, deleteProject } = props;
  const classes = useStyles();
  const [editing, setEditing] = useState(initialEditing)
  const [projectToEdit, setProjectToEdit] = useState(project)

  useEffect(() => {
    console.log("RERENDER ProjectCard")
  }, []);

  ///api/projects/:id

  const saveEdit = (e) => {
    e.preventDefault();
    // Make a put request to save your updated color, this should be an action 
    console.log('project to edit: ', projectToEdit);
    editProject(projectToEdit);
    console.log('after editProject')
    console.log('project to edit: ', projectToEdit);
    // axiosWithAuth()
    //   .put(`/api/projects/${projectToEdit.id}`)
    //   .then((res) => {
    //     console.log('project edit put success res: ', res)
    //   })
    //   .catch((err) => {
    //     console.log('project edit put success ERROR: ', err)
    //   })
      

  }

  const deleteProjFunc = (project) => {
   
        // make a delete request to delete this color
        console.log('project to be deleted: ', project)
        console.log('project id: ', project.id)
        const id = project.id
        deleteProject(id)
        //the below text will probably need to be an action?
        // axiosWithAuth()
        //   .delete(`/projects/${project.id}`)
        //   .then((res) => {
        //     console.log('delete project res: ', res);
        //     const newProjects = Projects.filter( project => 
        //       project.id != res.data);
        //     updateProjects(newProjects);
        //   })
    

  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {project.project_name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
                {project.project_founder}
            </Typography>
            <Typography color="textPrimary" component="h4">
                {project.project_goal}
            </Typography>
            <Typography color="textPrimary" component="p">
                {project.project_description}
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button size="small" color="primary" 
            onClick = {(e) => {
                e.preventDefault()
                setEditing(!editing)
            }
            }
          >
            Edit
          </Button>
          <Button size="small" color="primary"
            onClick = {(e) => {
                e.stopPropagation()
                deleteProjFunc(project)
            }
            }
          >
            Delete
          </Button>
      </CardActions>
      {editing ? (
          <div>
            <h3>Edit Project</h3>
            <form onSubmit={saveEdit} >
            <label>
                Name:
                <input
                onChange={e =>
                    setProjectToEdit({ ...projectToEdit, project_name: e.target.value })
                }
                value={projectToEdit.project_name}
                />
            </label>
            <label>
                Goal:
                <input
                onChange={e =>
                    setProjectToEdit({
                    ...projectToEdit,
                    project_goal: e.target.value
                    })
                }
                value={projectToEdit.project_goal}
                />
            </label>
            <label>
                Description:
                <input
                onChange={e =>
                    setProjectToEdit({
                    ...projectToEdit,
                    project_description: e.target.value
                    })
                }
                value={projectToEdit.project_description}
                />
            </label>
            <div className="button-row">
                <button type="submit">Save</button>
                <button onClick={() => setEditing(false)}>Cancel</button>
            </div>
            </form>
          </div>
      ) : (
          undefined
      )}
    </Card>
  );
}

export default connect(null, {deleteProject, editProject})(ProjectCard);
