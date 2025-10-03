import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { admin } = useContext(AuthContext);
  const hasAccess = Boolean(admin?.id || localStorage.getItem("accessToken"));
  return hasAccess ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
