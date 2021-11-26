import axios from 'axios';

import {baseUrl} from '../constants/url/url';

const getAllSongs = () => {
  const request = axios.get(`${baseUrl}/song/all`);
  return request.then(response => response.data);
};

export {getAllSongs};
