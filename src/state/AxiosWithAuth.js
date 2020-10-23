
import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://funding-platform-bw.herokuapp.com/', 
    headers: {
      Authorization: token,
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
