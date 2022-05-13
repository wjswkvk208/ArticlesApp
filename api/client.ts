import axios from 'axios';

const baseURL = __DEV__
  ? 'http://localhost:1337/api'
  : 'https://localhost:1337/api';

const client = axios.create({baseURL});

export default client;
