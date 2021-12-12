import axios from 'axios';

import {baseUrl} from '../constants/url/url';

const login = async credentials => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

const loginFb = async token => {
  const request = axios.get(
    `https://graph.facebook.com/me?access_token=${token}`,
  );
  return request.then(response => response.data);
};

export default {login, loginFb};
