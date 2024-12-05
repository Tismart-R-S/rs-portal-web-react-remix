import axios from "axios";

const RecruitmentClient = axios.create({
  baseURL: process.env.API_RECRUITMENT,
  headers: {
    "Content-Type": "application/json",
  },
});

export default RecruitmentClient;
