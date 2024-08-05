import { createContext, useContext, useState } from "react";
import { http } from "../../common/http";
import { StorageToken } from "./token";

export const AuthContext = createContext({
  isLogged: false,
  login: (email, senha) => null,
  logout: () => null,
  profile: {},
});
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(!!StorageToken.accessToken);

  const login = (email, senha) => {
    http
      .post("auth/login", {
        email,
        senha,
      })
      .then(res => {
        console.log(res);
        StorageToken.defineToken(res.data.access_token, res.data.refresh_token);
        setIsLogged(true);
      })
      .catch(erro => console.error(erro));
  };
  const logout = () => {
    StorageToken.Logout();
    setIsLogged(false);
  };

  const value = { login, logout, isLogged };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
