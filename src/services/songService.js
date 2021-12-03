import axios from 'axios';

import {baseUrl} from '../constants/url/url';

let token = null;

const setToken = newToken => {
  token = `Bearer ${newToken}`;
};

const getAllSongs = () => {
  const request = axios.get(`${baseUrl}/song/all`);
  return request.then(response => response.data);
};

const addToFavorite = async obj => {
  const config = {
    headers: {Authorization: token},
  };

  const response = await axios.post(`${baseUrl}/favorite-list/`, obj, config);
  return response.data;
};

export default {getAllSongs, addToFavorite, setToken};
