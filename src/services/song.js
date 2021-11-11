import axios from 'axios';
const baseUrl =
  'https://music-app-dd.herokuapp.com/music/song/?fbclid=IwAR0_hZWlosZ1khuIpOrk-sMUlSX8hLQrddXQp4r6hKiOD0HX_UHzDxVuT4w&format=json';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

export {getAll};
