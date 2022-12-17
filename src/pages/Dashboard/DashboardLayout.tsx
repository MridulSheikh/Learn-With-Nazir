import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Footer from "../../components/shared/Footer";
import Loading from "../../components/shared/Loading";
import useAuth from "../../Hooks/useAuth";
import DashboardNavigation from "./DashboardNavigation";


function DashboardLayout({children} : any) {
  const {user} = useAuth();
  const location = useLocation()
  
    return user?.role === "admin" ?
    <div>
        <DashboardNavigation />
        <div className="container px-5 xl:px-0 xl:max-w-screen-lg mx-auto">
            {children}
        </div>
        <Footer />
    </div>
    :
    <Navigate to="/" state={{from : location}} replace />
}

export default DashboardLayout;
