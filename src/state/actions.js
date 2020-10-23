// Necessary actions:
// - login user (store email)
// - register user (store email)
// - fetchProjects (get)
// - pushProject (post)
// - deleteProject (delete)
// - edit project (put)

//import axios
import axios from 'axios';
import axiosWithAuth from './AxiosWithAuth';

export const FETCH_PROJECTS_START = "FETCH_PROJECTS_START";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";

export const PUSH_PROJECT_START = "PUSH_PROJECT_START";
export const PUSH_PROJECT_SUCCESS = "PUSH_PROJECT_SUCCESS";

export const EDIT_PROJECT_START = "EDIT_PROJECT_START";
export const EDIT_PROJECT_SUCCESS = "EDIT_PROJECT_SUCCESS";

export const DELETE_PROJECT_START = "DELETE_PROJECT_START";
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";


//Question: not really a question, but if I could get access to the user_ID I could change this to SET_ID
export const SET_USERNAME = "SET_USERNAME";

export const fetchProjects = () => (dispatch) => {
    dispatch({ type: FETCH_PROJECTS_START });
    //Question: does this need to be axiosWithAuth?
    axiosWithAuth().get('/api/projects/')
        .then((res) => {
            console.log("Project data in axios get call: ", res.data);
            dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            console.log('fetchProjects err: ', err)
        })
}

export const editProject = (projectToEdit) => (dispatch) => {
    console.log('above dispatch');
    dispatch({ type: EDIT_PROJECT_START });
    console.log('below dispatch');
    console.log('project edit action object: ', projectToEdit);
    axiosWithAuth()
      .put(`/api/funding/:${projectToEdit.id}`)
      .then((res) => {
        console.log('project edit put success res: ', res)
        dispatch({ type: EDIT_PROJECT_SUCCESS, payload: res.data})
        // fetchProjects();
      })
      .catch((err) => {
        console.log('project edit put success ERROR: ', err)
      })

}

export const deleteProject = (id) => (dispatch) => {
    dispatch({ type: DELETE_PROJECT_START })
    axios
        .delete(`https://bw-rw-funding.herokuapp.com/api/project/${id}`)
        .then((res) => {
            dispatch( {type: DELETE_PROJECT_SUCCESS, payload: id})
            console.log('successful dispatch to delete project')
            //fetchProjects();
        })
        .catch((err) => {
            console.log('unsuccessful dispatch to delete project: ', err)
        })
}

export const setUsername = (username) => (dispatch) => {
    dispatch({ type: SET_USERNAME, payload: username });
}



