import axios from 'axios';
const baseUrl = 'https://mock-server-music.herokuapp.com/songs';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

export {getAll};
