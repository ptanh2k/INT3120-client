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

const getFavorite = username => {
  const config = {
    headers: {Authorization: token},
  };

  const request = axios.get(`${baseUrl}/favorite-list/${username}`, config);
  return request.then(response => response.data);
};

export default {getAllSongs, addToFavorite, getFavorite, setToken};
