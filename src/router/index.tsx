import React from "react";
import { RootState } from "../interfaces/redux/store";
import { useSelector } from "react-redux";
import AuthRouter from "./components/AuthRouter";
import ProtectedRouter from "./components/ProtectedRouter";


const Router = () => {
  const isAuthenticated = useSelector<RootState>(
    (state) => state.auth.isLoggedIn
  );

  return <>{isAuthenticated ? <ProtectedRouter /> : <AuthRouter />}</>;
};

export default Router;
