import axios from "axios";
import { StorageToken } from "../../modules/auth/token";

export const http = axios.create({
  baseURL: "http://localhost:8080/",
});

const ignoreRoutesToErros = ["auth/login", "auth/refresh"];

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

const refreshToken = async () => {
  const token = StorageToken.refreshToken;

  return axios
    .get("http://localhost:8080/auth/refresh", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      StorageToken.defineToken(res.data.access_token, res.data.refresh_token);
    });
};

const lidarComErro401 = async erro => {
  await refreshToken().then(() => http(erro.config));
  return Promise.reject(erro);
};

// adicionar um interceptador da resposta
http.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    if (
      !ignoreRoutesToErros.includes(error.config.url) &&
      error.response.status === 401
    ) {
      console.log("caiu no erro ");

      return lidarComErro401(error);
    }
    return Promise.reject(error);
  }
);

export default http;
