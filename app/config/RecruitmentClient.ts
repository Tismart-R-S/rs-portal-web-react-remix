import axios from "axios";

export const RecruitmentClient = axios.create({
  baseURL: process.env.API_RECRUITMENT,
  headers: {
    "Content-Type": "application/json",
  },
});
