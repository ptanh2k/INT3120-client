import axios from 'axios';

import {baseUrl} from '../constants/url/url';

const register = async info => {
  const response = await axios.post(`${baseUrl}/register`, info);
  return response.data;
};

export default {register};
