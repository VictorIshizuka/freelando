import axios from "axios";
import { StorageToken } from "../../modules/auth/token";

export const http = axios.create({
  baseURL: "http://localhost:8080/",
});

// Adiciona um interceptador na requisição
http.interceptors.request.use(
  function (config) {
    // adicionar o token no cabeçalho se ele existir
    const token = StorageToken.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Token foi adicionado ao cabeçalho");
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
