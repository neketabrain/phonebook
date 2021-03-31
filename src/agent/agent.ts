import axios from 'axios';

import { API_URL } from 'src/constants';

const agent = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

export default agent;
