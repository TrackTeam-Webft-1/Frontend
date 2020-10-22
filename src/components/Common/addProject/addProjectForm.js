import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
//import axios from 'axios';
import axiosWithAuth from '../../../state/AxiosWithAuth';

const initialValues = {
    title: '',
    contents: '',
    donations: "$"
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
        .post('/api/posts', newProject)
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
        const newProject = {

            //Question: little confused by this, again I think I need access to the email (or username if we reorganize) so that I can set it to state
            email: values.email.trim(),
            title: values.title.trim(),
            contents: values.contents.trim(),
            donations: values.donations.trim(),
            //This also needs to be passed in, so like the email or userna,e, I need access to it. Hmm, actually if I ad just the user_id, i'd probably be okay wihout the username or email
            users_id: 1,
            project_id: Math.random()
        };
        postNewProject(newProject);
        setValues(initialValues);
    }


    return(
        <div>
            <h2>Add project:</h2>
            <form className = 'project-form' onSubmit = {submitValues}>
                <label>Title: 
                    <input 
                        type = 'text'
                        name = 'title'
                        onChange = {handleChanges}
                        value = {values.title}
                        placeholder = 'enter title'
                    />
                </label>

                <label>Contents: 
                    <input 
                        type = 'text'
                        name = 'contents'
                        onChange = {handleChanges}
                        value = {values.contents}
                        placeholder = 'enter contents'
                    />
                </label>

                <label>Donations: 
                    <input 
                        type = 'text'
                        name = 'donations'
                        onChange = {handleChanges}
                        value = {values.donations}
                        placeholder = 'enter donations'
                    />
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddProjectForm;
