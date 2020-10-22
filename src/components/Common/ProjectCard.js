import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  const { project } = props;
  const classes = useStyles();
  const [editing, setEditing] = useState(initialEditing)
  const [projectToEdit, setProjectToEdit] = useState(project)

  const saveEdit = (e) => {
    e.preventDefault();
    // Make a put request to save your updated color, this should be an action 
    
    console.log('project to edit: ', projectToEdit)
  }

  const deleteProject = (project) => {
   
        // make a delete request to delete this color
        console.log('project to be deleted: ', project)

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
                {project.title}
            </Typography>
            <Typography color="textPrimary" component="h4">
                {project.donations}
            </Typography>
            <Typography color="textPrimary" component="p">
                {project.contents}
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
                deleteProject(project)
            }
            }
          >
            Delete
          </Button>
      </CardActions>
      {editing ? (
          <div>
            <h3>Edit Project</h3>
            <form onSubmit={saveEdit}>
            <label>
                Project Title:
                <input
                onChange={e =>
                    setProjectToEdit({ ...projectToEdit, title: e.target.value })
                }
                value={projectToEdit.project}
                />
            </label>
            <label>
                Contents:
                <input
                onChange={e =>
                    setProjectToEdit({
                    ...projectToEdit,
                    contents: e.target.value 
                    })
                }
                value={projectToEdit.contents}
                />
            </label>
            <label>
                Donations:
                <input
                onChange={e =>
                    setProjectToEdit({
                    ...projectToEdit,
                    donations: e.target.value + project.donations
                    })
                }
                value={projectToEdit.donations}
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

export default ProjectCard;

// {editButtons ? (
//     <CardActions>
//       <Button size="small" color="primary">
//         Edit
//       </Button>
//       <Button size="small" color="primary">
//         Delete
//       </Button>
//     </CardActions>
//   ) : (
//     undefined
//   )}

// const saveEdit = e => {
//     e.preventDefault();
//     // Make a put request to save your updated color
//     // think about where will you get the id from...
//     // where is is saved right now?
//     // bada bing and a bada boom
//     console.log('project to edit: ', projectToEdit)
//     axiosWithAuth()
//       .put(`/projects/${projectToEdit.id}`, projectToEdit)
//       .then((res) => {
//         console.log('save project res: ', res)
//         console.log('save project event: ', e)
//         setEditing(false)
//         const newEditProjects = projects.map(project => {
//           if(project.id === res.id){
//             return res
//           }
//           else{
//             return project
//           }
//         });
//         updateprojects(newEditprojects)
//         console.log('all projects: ', projects);
//       })
//       .catch((err) => {
//         console.log('project to edit error: ', err)
//       })

//   };
