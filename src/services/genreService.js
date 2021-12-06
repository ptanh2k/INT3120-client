import axios from 'axios';

import {baseUrl} from '../constants/url/url';

const getAllGenres = () => {
  const request = axios.get(`${baseUrl}/genre/all`);
  return request.then(response => response.data);
};

export {getAllGenres};
