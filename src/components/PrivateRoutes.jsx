import { Navigate, Outlet } from "react-router-dom";
import UseAuthStatus from "./hooks/UseAuthStatus";
import { useEffect } from "react";

const PrivateRoutes = ({ handleOpenLogin }) => {
  const { loggedIn, checkingAuthStatus } = UseAuthStatus();

  const redirectUser = () => {
    if (!loggedIn) {
      handleOpenLogin();
    }
    return <Navigate to="/" />;
  };
  useEffect(() => {}, [handleOpenLogin, loggedIn]);
  if (checkingAuthStatus) {
    return <h1 className="text-lg font-bold animate-pulse">Loading...</h1>;
  }
  return loggedIn ? <Outlet /> : redirectUser();
};

export default PrivateRoutes;
