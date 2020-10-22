
import axios from 'axios';

const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://virtual-reality-funding.herokuapp.com/', 
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export default axiosWithAuth;