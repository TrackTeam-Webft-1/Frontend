
import * as yup from 'yup';

export default yup.object().shape({
    firstname: yup.string()
        .required('firstname is required')
        .min(3, 'firstname must be 3 chars or longer'),
    lastname: yup.string()
        .required('lastname is required')
        .min(3, 'lastname must be 3 chars or longer'),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password must be 6 chars or longer'),
});