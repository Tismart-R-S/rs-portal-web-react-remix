import axios from "axios";

const AuthClient = axios.create({
  baseURL: process.env.API_AUTH,
  headers: {
    "Content-Type": "application/json",
  },
});

AuthClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("AuthClient.Error en la respuesta:", error.response.data);
    } else if (error.request) {
      console.error("AuthClient.No se recibió respuesta:", error.request);
    } else {
      console.error(
        "AuthClient.Error al configurar la solicitud:",
        error.message
      );
    }
    return Promise.reject(error);
  }
);

export default AuthClient;
