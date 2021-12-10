import axios from 'axios';

import {baseUrl} from '../constants/url/url';

const getAllGenres = () => {
  const request = axios.get(`${baseUrl}/genre/all`);
  return request.then(response => response.data);
};

const getAllSongsOfGenre = genre => {
  const request = axios.get(`${baseUrl}/genre-song/${genre}`);
  return request.then(response => response.data);
};

export default {getAllGenres, getAllSongsOfGenre};
