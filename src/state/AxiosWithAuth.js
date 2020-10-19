
import axios from 'axios';

const axiosWithAuth = () => {
  return axios.create({
    //baseURL: , **Fill with actual url
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export default axiosWithAuth;