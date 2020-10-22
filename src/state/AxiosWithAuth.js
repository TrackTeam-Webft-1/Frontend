
import axios from 'axios';

const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://virtual-reality-funding.herokuapp.com', 
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
};

export default axiosWithAuth;


// export const axiosWithAuth = () => {
//   return axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//       Authorization: localStorage.getItem('token'),
//     },
//   });
// };
