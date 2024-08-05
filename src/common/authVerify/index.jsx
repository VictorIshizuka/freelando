import { Navigate } from "react-router-dom";

import { useAuthContext } from "../../modules/auth/hook";

const ProtectedRoute = () => {
  const { isLogged } = useAuthContext();

  if (isLogged === true) {
    console.log("caiu");
    <Navigate to="area-logada/home" /> || <Navigate to="area-logada/profile" />;
  } else {
    console.log("caiu");
    <Navigate to="/erro" />;
  }
};

export default ProtectedRoute;
//victorishizuka131@outlook.com
