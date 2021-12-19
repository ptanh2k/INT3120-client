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

const getUserPlaylist = username => {
  const config = {
    headers: {Authorization: token},
  };

  const request = axios.get(`${baseUrl}/playlist-user/${username}`, config);
  return request.then(response => response.data);
};

const createNewPlaylist = async obj => {
  const config = {
    headers: {Authorization: token},
  };

  const response = await axios.post(`${baseUrl}/playlist/`, obj, config);
  return response.data;
};

const addSongToPlaylist = async obj => {
  const config = {
    headers: {Authorization: token},
  };

  const response = await axios.post(`${baseUrl}/playlist-song/`, obj, config);
  return response.data;
};

const increaseStreamCount = id => {
  const config = {
    headers: {Authorization: token},
  };

  const request = axios.put(`${baseUrl}/song/views/${id}`, undefined, config);
  return request.then(response => response.data);
};

export default {
  getAllSongs,
  addToFavorite,
  getFavorite,
  getUserPlaylist,
  createNewPlaylist,
  addSongToPlaylist,
  increaseStreamCount,
  setToken,
};
