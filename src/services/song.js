import axios from 'axios';
const baseUrl = 'https://music-app-dd.herokuapp.com';

const getAllSongs = () => {
  const request = axios.get(`${baseUrl}/music/song`);
  return request.then(response => response.data);
};

export {getAllSongs};
