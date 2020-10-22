// Necessary actions:
// - login user (store email)
// - register user (store email)
// - fetchProjects (get)
// - pushProject (post)
// - deleteProject (delete)
// - edit project (put)

//import axios
import axios from 'axios';

export const FETCH_PROJECTS_START = "FETCH_PROJECTS_START";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";

export const PUSH_PROJECT_START = "PUSH_PROJECT_START";
export const PUSH_PROJECT_SUCCESS = "PUSH_PROJECT_SUCCESS";

export const DELETE_PROJECT_START = "DELETE_PROJECT_START";
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";

export const SET_USER_EMAIL = "SET_USER_EMAIL";

export const fetchProjects = () => (dispatch) => {
    dispatch({ type: FETCH_PROJECTS_START });
    axios.get('https://virtual-reality-funding.herokuapp.com/api/posts/')
        .then((res) => {
            console.log("Project data in axios get call: ", res.data);
            dispatch({ type: PUSH_PROJECT_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            console.log('fetchProjects err: ', err)
        })
}

export const setEmail = (email) => (dispatch) => {
    dispatch({ type: SET_USER_EMAIL, payload: email });
}



