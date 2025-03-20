import axios, { AxiosInstance } from "axios";

export function getAuthClient(apiUrl: string): AxiosInstance {
  return axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

