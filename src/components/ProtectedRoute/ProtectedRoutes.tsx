

import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";


interface PrivateRouteProps {
    loginStatus: boolean;
}

const ProtectedRoutes = (loginStatus: PrivateRouteProps) => {
    const [authUser, setAuthUser] = useState(true);
    useEffect(() => {
        if (localStorage.getItem("AUTH_TOKEN") !== null) {
            setAuthUser(true);
        } else {
            setAuthUser(false);
        }
    }, [loginStatus]);
    const location = useLocation();
   


    return authUser ? (
        <>
            <Outlet />

        </>
    ) : (
        <Navigate to="/" replace state={{ from: location }} />
    );
};

export default ProtectedRoutes;
