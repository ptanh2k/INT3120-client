import axios from 'axios';
const baseUrl = 'https://music-app-dd.herokuapp.com/music';

const login = async credentials => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

export default {login};
