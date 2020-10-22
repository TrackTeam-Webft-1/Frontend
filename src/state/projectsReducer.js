import { FETCH_PROJECTS_START, FETCH_PROJECTS_SUCCESS, PUSH_PROJECT_START, PUSH_PROJECT_SUCCESS, SET_USERNAME } from './actions';

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
        case SET_USERNAME:
            console.log('running SET_USERNAME')
            return {
                ...state,
                username: action.payload
            }
        default:
            return state;
    };
}; 

export default reducer