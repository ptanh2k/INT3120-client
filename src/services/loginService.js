import axios from 'axios';

import {baseUrl} from '../constants/url/url';

const login = async credentials => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

export default {login};
