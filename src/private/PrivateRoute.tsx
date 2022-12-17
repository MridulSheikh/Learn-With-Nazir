import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/shared/Loading";
import useAuth from "../Hooks/useAuth";

function PrivateRoute({ children }: any) {
  const location = useLocation();
  const { user, userLoading } = useAuth();
  if (userLoading) {
    return <div>
         <Loading />
    </div>;
  } else {
    if (!user?.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
        return children;
    }
  }
}

export default PrivateRoute;
