import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
//import axios from 'axios';
import axiosWithAuth from '../../../state/AxiosWithAuth';

const initialValues = {
    project_name: '',
    project_founder: '',
    project_goal: "$",
    project_description: "",
}

const AddProjectForm = () => {
    //const { projects, updateProjects } = props;
    const [values, setValues] = useState(initialValues)

    const handleChanges = (e) => {
        e.persist();
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });  
        
    };

    const postNewProject = (newProject) => {
        axiosWithAuth()
        .post('/api/', newProject)
            .then((res) => {
                console.log('add project res: ', res)
                //updateProjects(res.data)
                
            })
            .catch((err) => {
                console.log('Add project error: ', err)
            })
    };

    //const { push } = useHistory();

//  email: 'lol@lol.com',
//  title: 'First VR Pitch',
//  contents: 'Hope you like this idea!',
//  donations:'$1000',
//  users_id: 1,
//  project_id: 2

    const submitValues = (e) => {
        e.preventDefault()
        console.log('Submitting values')
        const newProject = {

            id: Math.random(),
            project_name: values.project_name.trim(),
            project_founder: values.project_founder.trim(),
            project_goal: values.project_goal.trim(),
            project_description: values.project_description.trim()
            
        };
        postNewProject(newProject);
        setValues(initialValues);
    }


    return(
        <div>
            <h2>Add project:</h2>
            <form className = 'project-form' onSubmit = {submitValues}>
                <label>Name: 
                    <input 
                        type = 'text'
                        name = 'project_name'
                        onChange = {handleChanges}
                        value = {values.project_name}
                        placeholder = 'enter project name'
                    />
                </label>

                <label>Founder: 
                    <input 
                        type = 'text'
                        name = 'project_founder'
                        onChange = {handleChanges}
                        value = {values.project_founder}
                        placeholder = 'enter founder'
                    />
                </label>

                <label>Goal: 
                    <input 
                        type = 'text'
                        name = 'project_goal'
                        onChange = {handleChanges}
                        value = {values.project_goal}
                        placeholder = 'enter goal'
                    />
                </label>

                <label>Description: 
                    <input 
                        type = 'text'
                        name = 'project_description'
                        onChange = {handleChanges}
                        value = {values.project_description}
                        placeholder = 'enter description'
                    />
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddProjectForm;
