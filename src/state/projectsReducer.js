import { FETCH_PROJECTS_START, FETCH_PROJECTS_SUCCESS, PUSH_PROJECT_START, PUSH_PROJECT_SUCCESS, SET_USERNAME, EDIT_PROJECT_START, EDIT_PROJECT_SUCCESS, DELETE_PROJECT_START, DELETE_PROJECT_SUCCESS } from './actions';

const initialState = {
    projects: [],
    isLoading: false,
    newProject: {},
    username: ''
};

const reducer = ( state = initialState, action) => {
    switch( action.type ) {
        case FETCH_PROJECTS_START:
            console.log('running FETCH_PROJECTS_START');
            return {
                ...state,
                isLoading: true
            } 
        case FETCH_PROJECTS_SUCCESS:
            console.log('running FETCH_PROJECTS_SUCCESS');
            return {
                ...state,
                projects: action.payload
            }
        case EDIT_PROJECT_START:
            console.log('running EDIT_PROJECT_START');
            return {
                ...state,
                isLoading: true
            } 
        case EDIT_PROJECT_SUCCESS:
            console.log('running EDIT_PROJECT_START');
            return {
                ...state,
                isLoading: false
            } 
        case DELETE_PROJECT_START:
            console.log('running DELETE_PROJECT_START')
            return {
                ...state,
                isLoading: true
            }
        case DELETE_PROJECT_SUCCESS:
            console.log('running DELETE_PROJECT_SUCCESS')
            return {
                ...state,
                isLoading: false,
                projects: state.projects.filter(item => {
                    return item.id !== action.payload
                })
            }
        case SET_USERNAME:
            console.log('running SET_USERNAME')
            return {
                ...state,
                username: action.payload
            }
        default:
            console.log('hit default dispatch')
            return state;
    };
}; 

export default reducer