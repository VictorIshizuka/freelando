import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialClient = {
  profile: "",
  interest: "",
  nameComplete: "",
  uf: "",
  city: "",
  email: "",
  password: "",
  passwordForgot: "",
};

export const RegisterClientContext = createContext({
  client: initialClient,
  setProfile: () => null,
  setInterest: () => null,
  setNameComplete: () => null,
  setUf: () => null,
  setCity: () => null,
  setEmail: () => null,
  setPassword: () => null,
  setPasswordForgot: () => null,
  submitClient: () => null,
  verifyValueRegister: () => null,
});

export const useRegisterClientContext = () => {
  return useContext(RegisterClientContext);
};

export const RegisterClientProvider = ({ children }) => {
  const navigate = useNavigate();

  const [client, setClient] = useState(initialClient);
  const setProfile = (profile) => {
    setClient((oldState) => ({ ...oldState, profile }));
  };
  const setInterest = (interest) => {
    setClient((oldState) => ({ ...oldState, interest }));
  };
  const setNameComplete = (nameComplete) => {
    setClient((oldState) => ({ ...oldState, nameComplete }));
  };
  const setUf = (uf) => {
    setClient((oldState) => ({ ...oldState, uf }));
  };
  const setCity = (city) => {
    setClient((oldState) => ({ ...oldState, city }));
  };
  const setEmail = (email) => {
    setClient((oldState) => ({ ...oldState, email }));
  };
  const setPassword = (password) => {
    setClient((oldState) => ({ ...oldState, password }));
  };
  const setPasswordForgot = (passwordForgot) => {
    setClient((oldState) => ({ ...oldState, passwordForgot }));
  };
  const submitClient = () => {
    navigate("/register/conclueded");
  };
  const verifyValueRegister = () => {
    setProfile(!!client.profile);
    navigate("/register");

    // return !!client.profile;
  };

  const context = {
    client,
    setProfile,
    setInterest,
    setNameComplete,
    setUf,
    setCity,
    setEmail,
    setPassword,
    setPasswordForgot,
    submitClient,
    verifyValueRegister,
  };
  return (
    <RegisterClientContext.Provider value={context}>
      {children}
    </RegisterClientContext.Provider>
  );
};
