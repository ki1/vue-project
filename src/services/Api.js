import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'https://public-api06.devwowcher.co.uk/v1/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
