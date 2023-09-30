import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  const isLogin: boolean = true;

  return isLogin ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
