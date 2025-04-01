import axios from "axios";

export const AuthClient = axios.create({
  baseURL: process.env.API_AUTH,
  headers: {
    "Content-Type": "application/json",
  },
});
