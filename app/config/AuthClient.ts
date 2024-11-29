import axios from 'axios';

const AuthClient = axios.create({
  baseURL: process.env.API_AUTH,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AuthClient;
